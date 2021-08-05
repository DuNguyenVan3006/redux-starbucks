import  * as Types from './../const/ActionType';
import callApi from './../ultil/apiCall';

export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}
export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
}
export const actAddToCart = (product, quanlity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quanlity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteProductInCart = (product) => {
    return {
        type : Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateProductInCart = (product, quanlity) => {
    return {
        type : Types.UPDATE_PRODUCT_IN_CART,
        product,
        quanlity
    }
}