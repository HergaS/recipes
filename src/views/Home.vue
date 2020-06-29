<template>
  <div class="row">
    <RecipeSearch class="col-3" />
    <RecipeSelect class="col-6" />
    <div class="col-3"><img alt="Vue logo" src="../assets/logo.png"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeSearch from '@/components/RecipeSearch.vue'
import RecipeSelect from '@/components/RecipeSelect.vue'

export default {
  name: 'Home',
  components: {
    RecipeSearch,
    RecipeSelect
  }
}
</script>
