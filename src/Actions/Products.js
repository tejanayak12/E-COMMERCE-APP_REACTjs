export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";


// Action Creator => 

export const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
};

export const fetchProductSuccess = (products = []) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
};

export const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
};


// Thunk Function => 

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductRequest());
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((productsList) => {
                dispatch(fetchProductSuccess(productsList));
            })
            .catch((error) => {
                dispatch(fetchProductsFailure(error.message))
            })
    }
};

