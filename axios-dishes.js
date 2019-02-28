import axios from 'axios';

const axiosDishes = axios.create({
    baseURL: 'https://dishes-lab71.firebaseio.com'
});

export default axiosDishes;