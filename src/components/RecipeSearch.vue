<template>
  <div id="recipe-search">
    <form class="row">
      <input v-model="searchValue" type="text" class="form-control col-sm-6 col-md-6 offset-md-2">
      <button class="btn btn-primary" @click.prevent="searchData">Search</button>
    </form>
    <RecipeSelect v-show="showSrc" />
  </div>
</template>

<script>
import RecipeSelect from '@/components/RecipeSelect.vue'
import { mapState } from 'vuex';

export default {
  name: 'RecipeSearch',
  components: {
    RecipeSelect
  },
  data() {
    return {
      appID: process.env.VUE_APP_EDAMAM_API_ID,
      appKey: process.env.VUE_APP_EDAMAM_API_KEY,
      searchValue: '',
      showSrc: true
    }
  },
  computed: mapState(['showSearch']),
  watch: {
    showSearch(val) {
      this.showSrc = this.$store.getters.getShowSearch
    }
  },
  methods: {
    searchData() {
      if (this.searchValue !== '') {
        this.$http.get(`https://api.edamam.com/search?q=${this.searchValue}&app_id=${this.appID}&app_key=${this.appKey}&from=0&to=20`)
          .then(response => {
            this.$store.commit("searchResponse", response.body.hits)
            this.$store.commit("showSearch", true)
            this.$store.commit("showRecipe", false)
          }, error => {
            console.log(error)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn{
  margin: 0 2%;
}
#recipe-search{
  overflow: hidden;
}
</style>
