import React from 'react';
import { addProduct,removeProduct } from '../redux'
import { connect } from 'react-redux';


const ProductManager = (props) => {
    return (
        <div>
            <h2>Number of Products-{props.products}</h2>
            <button onClick={props.addProduct}>Add Product</button>
            <button onClick={props.removeProduct}>Remove Product</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.Product.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: () => dispatch(addProduct()),
        removeProduct: () =>dispatch(removeProduct())
    }
}

export default connect
(mapStateToProps,
mapDispatchToProps
)(ProductManager)