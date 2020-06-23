<template>
  <div class="recipe-search container-fluid">
    <form class="row">
      <input v-model="searchValue" type="text" class="form-control col-sm-12 col-md-8">
      <button class="btn btn-primary" @click.prevent="searchData">Search</button>
    </form>
    <div class="container-fluid" v-for="(rec, index) in apiResponse" :key="index">
      <div class="row my-3">
        <img :src="rec.recipe.image" alt="" class="col-6">
        <div class="col-6 my-auto">{{ rec.recipe.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeSearch',
  data() {
    return {
      appID: process.env.VUE_APP_EDAMAM_API_ID,
      appKey: process.env.VUE_APP_EDAMAM_API_KEY,
      searchValue: '',
      apiResponse: []
    }
  },
  methods: {
    searchData() {
      if (this.searchValue !== '') {
        this.$http.get(`https://api.edamam.com/search?q=${this.searchValue}&app_id=${this.appID}&app_key=${this.appKey}&from=0&to=5`)
          .then(response => {
            this.apiResponse = response.body.hits
            console.log(this.apiResponse)
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
.row{
  margin: 2%;
}
.btn{
  margin: 0 2%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
