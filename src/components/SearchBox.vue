<template>
  <div class="search-box">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Enter a Movie Title..."
      @keyup.enter="$router.push('/results')"
    >
    <router-link to="/results">
      <SearchIcon class="search-icon" />
    </router-link>
  </div>
</template>

<script>
import SearchIcon from '@/components/icons/Search.vue';

export default {
  computed: {
    searchQuery: {
      get() {
        return this.$store.state.searchQuery;
      },
      set(value) {
        this.$store.commit('updateQuery', value);
      },
    },
  },
  components: {
    SearchIcon,
  },
};
</script>

<style lang="scss">
@import '../styles/lib';

$input-height: 42px;

.search-box {
  position: relative;
  margin: 1rem auto;
  width: 300px;
  input {
    box-sizing: border-box;
    width: 100%;
    padding: 0 40px 0 10px;
    height: $input-height;
    line-height: $input-height;
    border-radius: $input-height / 2;
    border: 1px solid $foreground-colour;
    font-size: 1.1rem;
  }
  .search-icon {
    position: absolute;
    right: 8px;
    top: 8px;
  }
}
</style>
