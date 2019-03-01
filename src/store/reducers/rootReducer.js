import {DISH_SUCCESS, MODAL_DISHES} from "../actions/actions-type";

const initialState = {
    dishes: {},
    loading: false,
    modalVisible: false,
    totalPrice: 0
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case DISH_SUCCESS:
            return {
                ...state,
                dishes: action.data
            };
        case MODAL_DISHES:
            return {
                ...state,
                modalVisible: !state.modalVisible
            };
        default:
            return state;
    }
};

export default reducer;