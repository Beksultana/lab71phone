import axios from '../../../axios-dishes.js';
export const MODAL_DISHES = "MODAL_DISHES";

export const DISH_REQUEST = 'DISH_REQUEST';
export const DISH_SUCCESS = 'DISH_SUCCESS';
export const DISH_ERROR = 'DISH_ERROR';

export const ADD_ORDERS = 'ADD_ORDERS';

export const dishRequest = () => ({type: DISH_REQUEST});
export const dishSuccess = data => ({type: DISH_SUCCESS, data});
export const dishError = () => ({type: DISH_ERROR});
export const modalDish = () => ({type: MODAL_DISHES});

export const addOrders = (orders) => ({type: ADD_ORDERS, orders});

export const getDishes = () => {
    return dispatch => {
        dispatch(dishRequest());

        axios.get('/dishes.json').then(response => {
            dispatch(dishSuccess(response.data))
        }, error => dispatch(dishError()))
    }
};