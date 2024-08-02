import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_DOMAIN;
export default axios;
