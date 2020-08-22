<template>
  <div class="container fluid">
    <RecipeSearch class="row" />
    <RecipeSelect class="row" />
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
