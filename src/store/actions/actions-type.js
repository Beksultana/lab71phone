import axios from '../../../axios-dishes.js';

export const DISH_REQUEST = 'DISH_REQUEST';
export const DISH_SUCCESS = 'DISH_SUCCESS';
export const DISH_ERROR = 'DISH_ERROR';

export const dishRequest = () => ({type: DISH_REQUEST});
export const dishSuccess = data => ({type: DISH_SUCCESS, data});
export const dishError = () => ({type: DISH_ERROR});

export const getDishes = () => {
    return dispatch => {
        dispatch(dishRequest());

        axios.get('/dishes.json').then(response => {
            dispatch(dishSuccess(response.data))
        }, error => dispatch(dishError()))
    }
};