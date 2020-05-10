import {ADD_PRODUCT,REMOVE_PRODUCT} from './ProductValues';

const addProduct = () => {
    return {
        type: ADD_PRODUCT
    }
}

const removeProduct = () =>{
    return {
        type: REMOVE_PRODUCT
    }
}

export {
    addProduct,removeProduct
}