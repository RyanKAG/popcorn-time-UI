import Axios from 'axios';

const base_url = "https://api.themoviedb.org/3";
const img_base_url = "https://image.tmdb.org/t/p";
const api_key = "api_key=6bb1f3c2f7b0d421b0170f84fd3b6a63";

class API {
    static path = {
        tv: '/discover/tv',
        movies: '/discover/movie',
        anime: '',
        trendMovies: '',
        trendSeries: '',
    };

    static async requestApi(path) {
        let res = await Axios.get(base_url + path + '?' + api_key);
        let results = res.data.results;
        return results.map((mv) => ({
            ...mv, liked: false, seen: false
        }));
    }


    static getPoster(posterPath) {
        return img_base_url + "/w154" + posterPath;
    }

    static getPosterW(posterPath, width) {
        return img_base_url + `/w${width}` + '/d8u4jpkDKgEPDJUl4g3vOOP3mDe.jpg';
    }
}


export default API;