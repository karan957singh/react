import http from "./httpService";
import {apiUrl} from '../config';

const apiEndpoint = "/get-genre";
export function getGenres() {
    const data = http.get(apiUrl+apiEndpoint);
    return data;
}
