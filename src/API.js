import Axios from 'axios';
const base_url = "https://api.themoviedb.org/3";
const img_base_url = "https://image.tmdb.org/t/p";
const api_key = "api_key=6bb1f3c2f7b0d421b0170f84fd3b6a63";

class API {
    static async discoverMovies() {
        let res = await Axios.get(base_url + '/discover/movie?' + api_key);

        let results = res.data.results;
        let movies = results.map((mv) => ({ 
            ...mv, liked: false, seen: false
        }));
        
        return movies;
    }
    static getPoster(posterPath) {
        let posterUrl = img_base_url + "/w154" + posterPath;
        return posterUrl;
    }
}



export default API;