<template>
  <Carousel
    @page-change="handlePageChange"
    :pagination-enabled="false"
    :navigation-enabled="true"
    :per-page="1"
    :per-page-custom="[[500, 2]]"
    class="movie-carousel"
  >
    <Slide
      v-for="(movie, index) in this.$store.state.movies"
      :key="index"
    >
      <MovieCard :movie="movie"/>
    </Slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import MovieCard from '@/components/MovieCard.vue';

export default {
  components: {
    Carousel,
    Slide,
    MovieCard,
  },
  methods: {
    handlePageChange(pageNumber) {
      const nextIndex = pageNumber * 2 + 2;
      if (
        nextIndex < this.$store.state.movies.length
        && !this.$store.state.movies[nextIndex].Title
      ) {
        const nextPage = Math.floor(nextIndex / 10) + 1;
        this.$store.dispatch('getMovies', {
          query: this.$store.state.searchQuery,
          pageNumber: nextPage,
        });
      }
    },
  },
};
</script>

<style lang="scss">
.movie-carousel {
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
}

// carousel styling resets
.VueCarousel-navigation-button:focus {
  outline: none !important;
}
.VueCarousel-navigation-prev {
  transform: translateY(-50%) translateX(0%) !important;
}
.VueCarousel-navigation-next {
  transform: translateY(-50%) translateX(0%) !important;
}
</style>
