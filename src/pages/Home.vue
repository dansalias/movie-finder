<template>
  <div class="home">
    <header>
      <h1>Movie Finder</h1>
    </header>
    <SearchBox/>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';

export default {
  components: {
    SearchBox,
  },
};
</script>
