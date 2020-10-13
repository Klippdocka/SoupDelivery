import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://soup-delivery-34dda.firebaseio.com/'
});

export default instance;