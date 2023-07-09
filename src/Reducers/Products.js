import {
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS
} from "../Actions/Products";

import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/Cart";

const intialState = {
    loading: false,
    products: [],
    error: null
};

const productReducer = (state = intialState, action) => {
    const { type, payload } = action

    switch (type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: payload,
                error: null
            };

        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                products: [],
                error: payload
            };

        case ADD_TO_CART:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === payload.id) {
                        return {
                            ...product,
                            isInCart: true
                        };
                    }

                    return product;
                })
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === payload) {
                        return {
                            ...product,
                            isInCart: false
                        }
                    }
                    return product;
                })
            }

        default:
            return state;
    }
};

export default productReducer;
