import {ADD_ORDERS} from "../actions/actions-type";
const DELIVERY_PRICE = 150;
const initialState = {
    orders: {},
    ordersTotalPrice: 0,
    dishesTotalPrice: 0,
    delivery: DELIVERY_PRICE
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDERS:
            const order = action.orders;
            const ordersCopy = {...state.orders};
            let ordersTotalPrice = 0;
            let dishesTotalPrice = 0;

            if (order.price){
                ordersTotalPrice = state.ordersTotalPrice + order.price ;
            }
            if (order.price){
                dishesTotalPrice = state.dishesTotalPrice + order.price;
            }


            if (order.id in ordersCopy) {
                ordersCopy[order.id]++;
            } else {
                ordersCopy[order.id] = 1;
            }

            return{
                    ...state,
                    orders: ordersCopy,
                ordersTotalPrice: ordersTotalPrice,
                dishesTotalPrice: dishesTotalPrice,
                }
        }
    return state;
};

export default ordersReducer;