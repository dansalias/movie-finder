<template>
  <div class="movie-card">
    <div class="loader" v-show="movie.isLoading || isImageLoading">
      <Spinner/>
    </div>
    <main>
      <img
        v-if="!isImageBroken"
        :src="movie.Poster"
        @load="isImageLoading = false"
        @error="isImageLoading = false; isImageBroken = true"
      />
      <div v-else class="image-placeholder">
        Image Not Available
      </div>
    </main>
    <footer>
      <div class="title">{{ `${movie.Title} (${movie.Year})` }}</div>
      <div class="director">{{ movie.Director }}</div>
    </footer>
  </div>
</template>

<script>
import Spinner from '@/components/icons/Spinner.vue';

export default {
  data() {
    return {
      isImageLoading: true,
      isImageBroken: false,
    };
  },
  props: [
    'movie',
  ],
  components: {
    Spinner,
  },
};
</script>

<style lang="scss">
@import '../styles/lib';

.movie-card {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 280px;
  height: 400px;
  padding: 20px;
  background: $white;
  border: 1px solid lighten($foreground-colour, 50%);
  border-radius: 4px;
  overflow: hidden;
  main {
    img, .image-placeholder {
      height: 260px;
    }
    .image-placeholder {
      margin: 0 auto;
      width: 240px;
      background: grey;
      line-height: 260px;
      color: white;
    }
  }
  footer {
    .title, .director {
      margin: 1rem;
    }
    .title {
      font-weight: bold;
    }
  }
  .loader {
    @extend %v-center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $white;
  }
}
</style>
