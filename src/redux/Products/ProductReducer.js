import {ADD_PRODUCT,REMOVE_PRODUCT} from './ProductValues';

const initialState = {
    products: 0
}

const productReducer = (state = initialState,action) => {
    switch(action.type) {
        case ADD_PRODUCT: return{

            ...state,
            products:state.products + 1

        }
        case REMOVE_PRODUCT: return{
            ...state,
            products: state.products -1
        }
        default: return state
    }
}

export default productReducer