<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="searchData">click</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      appID: process.env.VUE_APP_EDAMAM_API_ID,
      appKey: process.env.VUE_APP_EDAMAM_API_KEY
    }
  },
  methods: {
    searchData() {
      this.$http.get(`https://api.edamam.com/search?q=chicken&app_id=${this.appID}&app_key=${this.appKey}&from=0&to=5`)
        .then(response => {
          console.log(response)
        }, error => {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
