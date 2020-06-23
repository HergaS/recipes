<template>
  <div class="row">
    <RecipeSearch class="col cols-3" />
    <div class="col cols-6"><img alt="Vue logo" src="../assets/logo.png"></div>
    <div class="col cols-3"><img alt="Vue logo" src="../assets/logo.png"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeSearch from '@/components/RecipeSearch.vue'

export default {
  name: 'Home',
  components: {
    RecipeSearch
  }
}
</script>
