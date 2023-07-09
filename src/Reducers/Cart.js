import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/Cart";

const intialState = {
    cartItems: []
};

function cartReducer(state = intialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, payload]
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((product) => product.id !== payload),
            };

        default:
            return state;
    }
};

export default cartReducer;
