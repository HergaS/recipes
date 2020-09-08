<template>
  <div class="container-fluid">
    <RecipeSearch />
    <RecipeDetails v-show="showHideRecipe" />
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeSearch from '@/components/RecipeSearch.vue'
import RecipeDetails from '@/components/RecipeDetails.vue'
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    RecipeSearch,
    RecipeDetails
  },
  data () {
    return {
      showHideRecipe: false
    }
  },
  computed: mapState(['showRecipe']),
  watch: {
    showRecipe(val) {
      this.showHideRecipe = this.$store.getters.getShowRecipe
    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  position: fixed;
  height: 70vh;
  z-index: 0;
  opacity: 0.5;
}
</style>

<!--
<div class="row justify-content-center"><img class="logo" alt="Chefs hat" src="../assets/chefs-hat.png"></div>
-->