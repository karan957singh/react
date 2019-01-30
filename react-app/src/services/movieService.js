import http from "./httpService";
import {apiUrl} from '../config';

const apiEndpointGet = "/get-movies";
const apiEndpointDelete = "/delete-movie";
const apiEndpointGetMovie = "/get-movie";
const apiEndpointSave = "/save-movie";
export function getMovies() {
    const data = http.get(apiUrl+apiEndpointGet);
    return data;
}
export function deleteMovie(movieId) {
     return http.get(apiUrl+apiEndpointDelete+"?id="+movieId);
    // http.post(apiEndpointDelete,{"id":movieId});
}
export function saveMovie(movie) {

    // console.log("aithe rakh: ",movie);
    if(movie.id){
        return http.post(apiUrl+apiEndpointSave+"?id="+movie.id,movie);
    }
    else{
        return http.post(apiUrl+apiEndpointSave,movie);
    }

    // http.post(apiEndpointDelete,{"id":movieId});
}
export function getMovie(id) {
    return http.get(apiUrl+apiEndpointGetMovie+"?id="+id);

}
