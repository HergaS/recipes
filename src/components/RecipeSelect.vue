<template>
  <div v-if="!showRecipe"><img alt="Vue logo" src="../assets/logo.png"></div>
  <div v-else class="recipe-select container-fluid">
    <h2 class="my-5">{{ selectRecipe.label }}</h2>
    <div class="row my-5"><img class="col-6 offset-3 " alt="recipe" :src="selectRecipe.image"></div>
    <ul class="row text-left">
      <li class="col-4 offset-1 my-2" v-for="(ingredient,index) in selectRecipe.ingredientLines" :key="index">
        {{ ingredient }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'RecipeSelect',
  data () {
    return {
      showRecipe: false,
      selectRecipe: {}
    }
  },
  computed: mapState(['selectedRecipe']),
  watch: {
    selectedRecipe(val) {
      this.selectRecipe = this.$store.getters.getRecipe
      this.showRecipe = true
    }
  }
}
</script>

<style scoped lang="scss">
.row{
  margin: 2%;
}
</style>