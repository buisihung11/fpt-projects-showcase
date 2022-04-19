import axios from "axios";

const request = axios.create({
    baseURL: 'https://api-fcms.unicode.edu.vn/api/v1',
});

export default  request;