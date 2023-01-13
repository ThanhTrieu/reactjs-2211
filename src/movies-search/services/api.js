import axios from "axios";

export const searchMovieByName = async (name = '') => {
    const urlApi = `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=cfe422613b250f702980a3bbf9e90716&page=1`;
    const response = await axios.get(urlApi);
    return response.status === 200 ? response.data : {};
}