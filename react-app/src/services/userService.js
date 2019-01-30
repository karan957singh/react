import http from "./httpService";
import {apiUrl} from '../config';

const apiEndpointGet = "/get-users";
const apiEndpointDelete = "/delete-user";
const apiEndpointGetUser = "/get-user";
const apiEndpointSave = "/save-user";
export function getUsers() {
    const data = http.get(apiUrl+apiEndpointGet);
    return data;
}
export function deleteMovie(userId) {
    return http.get(apiUrl+apiEndpointDelete+"?id="+userId);
    // http.post(apiEndpointDelete,{"id":movieId});
}
export function register(user) {
    return http.post(apiUrl+apiEndpointSave,{
        email: user.username,
        // password: user.password,
        name: user.name
    });
}
export function getUser(id) {
    return http.get(apiUrl+apiEndpointGetUser+"?id="+id);

}
