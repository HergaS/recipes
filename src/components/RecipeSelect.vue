<template>
  <div class="row">
    <div class="col-4 offset-1 recipe-box my-2" v-for="(rec, index) in apiResponse" :key="index">
      <div class="row my-3" @click="selectRecipe(rec.recipe)">
        <img :src="rec.recipe.image" alt="" class="col-4">
        <div class="col-6 my-auto"><h4>{{ rec.recipe.label }}</h4></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'RecipeSelect',
  data () {
    return {
      apiResponse: []
    }
  },
  computed: mapState(['searchResponse']),
  watch: {
    searchResponse(val) {
      this.apiResponse = this.$store.getters.getSearchResponse
    }
  },
  methods: {
    selectRecipe(rec) {
      this.$store.commit("selectRecipe", rec)
      this.$store.commit("showRecipe", true)
      this.$store.commit("showSearch", false)
    }
  }
}
</script>

<style scoped lang="scss">
.row{
  margin: 2%;
  cursor: pointer;
}
.recipe-box {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.recipe-box:hover {
  box-shadow: 10px 4px 8px 5px rgba(0, 0, 0, 0.2), 10px 6px 20px 10px rgba(0, 0, 0, 0.19);
}
</style>
