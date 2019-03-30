<template>
  <div class="results">
    <header>
      <Spinner v-if="$store.getters.isSearching"/>
      <h1 v-else>
        {{ `${$store.state.resultCount} results found for "${$store.state.searchQuery}"` }}
      </h1>
    </header>
    <MovieCarousel/>
  </div>
</template>

<script>
import Spinner from '@/components/icons/Spinner.vue';
import MovieCarousel from '@/components/MovieCarousel.vue';

export default {
  mounted() {
    this.$store.dispatch('getMovies', {
      query: this.$store.state.searchQuery,
      pageNumber: 1,
    });
  },
  components: {
    Spinner,
    MovieCarousel,
  },
};
</script>
