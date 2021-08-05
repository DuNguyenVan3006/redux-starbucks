import React, {Component} from 'react';
import {connect } from 'react-redux';
import Categories from '../component/Categories';
import Product from './../component/Product';
// import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import PropTypes from 'prop-types'
import { actAddToCart, actChangeMessage } from './../actions/index';
import cart from '../reducers/cart';



class  CategoriesContainer  extends Component {
    render(){
        var {products} = this.props;
        console.log("ra dc gi ko",products);
        var { cart } = this.props;
                return (
                    <div>
                        <Categories>
                            {this.showProducts(products)}
                            {this.totalCart(cart)}
                        </Categories> 
                    </div>
                 
                );
        }
totalCart(cart){
    var result =null;
    if(cart.length >0){
        result = cart.reduce(( acc, curr ) => acc + curr.quanlity ,0)
    }
    else {
        result =0;
    }
}
showProducts(products){
    var result = null;
    var { onAddToCart, onChangeMessage } = this.props;
    if(products.length > 0){
        result = products.map((product, index) => {
            return <Product 
                key={index} 
                product={product}
                onAddToCart = {onAddToCart} 
                onChangeMessage = {onChangeMessage}
            />
        });
    }
    return result;
}
   
}
CategoriesContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            img :PropTypes.string.isRequired,
            description :PropTypes.string.isRequired,
            price :PropTypes.number.isRequired,
            rating :PropTypes.number.isRequired


        })
    ).isRequired,
    onAddToCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired
  }
const mapStateToProps = state =>{
    return {
        // products : state.products,
        cart : state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (CategoriesContainer);
