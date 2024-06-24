import axios from "axios";
const instance = axios.create({
    baseUrl: "https://api.themoviedb.org/3"
})
// const API_KEY = "a381dfec013552b1e94bd2818ddc2694";

export default instance;