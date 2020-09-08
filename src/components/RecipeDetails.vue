<template>
  <div class="recipe-select row">
    <h2 class="my-5">{{ selectRecipe.label }}</h2>
    <div class="row my-5"><img class="col-6 offset-3 " alt="recipe" :src="selectRecipe.image"></div>
    <ul class="row text-left">
      <li class="col-4 offset-1 my-2" v-for="(ingredient,index) in selectRecipe.ingredientLines" :key="index">
        {{ ingredient }}
      </li>
    </ul>
  </div>
</template>
<!--Back button!!??-->
<script>
import { mapState } from 'vuex';

export default {
  name: 'RecipeDetails',
  data () {
    return {
      selectRecipe: {}
    }
  },
  computed: mapState(['selectedRecipe']),
  watch: {
    selectedRecipe(val) {
      this.selectRecipe = this.$store.getters.getRecipe
    }
  }
}
</script>

<style scoped lang="scss">
.row{
  margin: 2%;
}
</style>