import Vue from 'vue';
import Vuex from 'vuex';
import apiService from './services/apiService';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    searchQuery: '',
    resultCount: null,
    movies: [],
  },

  getters: {
    isSearching(state) {
      return state.resultCount === null;
    },
  },

  mutations: {

    // update the search query
    updateQuery(state, query) {
      state.searchQuery = query;
      state.movies = [];
      state.resultCount = 0;
    },

    // update the total number of movies and create a corresponding empty array
    updateResultCount(state, resultCount) {
      state.resultCount = resultCount;
      state.movies = Array(resultCount).fill({
        isLoading: true,
      });
    },

    // update the search results
    updateMovies(state, { data, pageNumber }) {
      const startIndex = (pageNumber - 1) * 10;
      state.movies.splice(startIndex, data.length, ...data);
    },

  },

  actions: {

    // get the search results for a given query and pageNumber
    async getMovies({ commit }, { query, pageNumber }) {
      const result = await apiService.getMovies(query, pageNumber);
      if (pageNumber === 1) {
        commit('updateResultCount', parseInt(result.totalResults, 10));
      }
      // get details for each movie
      const moviesWithDetails = await Promise.all(
        result.Search.map(async (movie) => {
          const movieDetails = await apiService.getMovieDetails(movie.imdbID);
          movieDetails.isLoading = false;
          return movieDetails;
        }),
      );
      commit('updateMovies', {
        data: moviesWithDetails,
        pageNumber,
      });
    },

  },
});
