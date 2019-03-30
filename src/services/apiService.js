import { API_URL } from '../config';

export default class apiService {
  static async fetchJSON(URL) {
    const response = await fetch(URL);
    const result = await response.json();
    return result;
  }

  static async getMovies(searchQuery, pageNumber = 1) {
    const movieData = this.fetchJSON(
      `${API_URL}&type=movie&s=${searchQuery}&page=${pageNumber}`,
    );
    return movieData;
  }

  static async getMovieDetails(imdbID) {
    const movieDetailsData = this.fetchJSON(
      `${API_URL}&i=${imdbID}`,
    );
    return movieDetailsData;
  }
}
