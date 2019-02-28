import {DISH_REQUEST, DISH_SUCCESS} from "../actions/actions-type";

const initialState = {
    dishes: {}
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case DISH_SUCCESS:
            return {
                ...state,
                dishes: action.data
            };
        default:
            return state;
    }
};

export default reducer;