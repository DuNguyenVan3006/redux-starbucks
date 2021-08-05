import React, {Component} from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../component/Cart'
import CartItem from './../component/CartItem'
import CartResult from './../component/CartResult';
import * as Message from './../const/Messager';
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from './../actions/index';


class  CartContainer  extends Component {
    render(){
        var {cart} = this.props;
                return (
                   <Cart>
                       {this.showCartItem(cart)};
                       {this.showTotalAmount(cart)};
                   </Cart>
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
            // return= <Headers />
        }

        showCartItem = (cart) => {
            var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
            var result = <tr>
                <td>{Message.MSG_CART_EMPTY}</td>
            </tr>;
            if (cart.length > 0) {
                result = cart.map((item, index) => {
                    return (
                        <CartItem
                            key={index}
                            item={item}
                            index={index}
                            onDeleteProductInCart={onDeleteProductInCart}
                            onChangeMessage={onChangeMessage}
                            onUpdateProductInCart={onUpdateProductInCart}
                        />
                    );
                });
            }
            return result;
        }
        showTotalAmount =(cart) =>{
            var result =null; 
                if(cart.length >0){
                    result =<CartResult  cart={cart}/>
                }
            return result;
        }
}
CartContainer.propTypes = {
    cart : PropTypes.arrayOf(PropTypes.shape({
        product :PropTypes.shape({
            id : PropTypes.number.isRequired,
            img :PropTypes.string.isRequired,
            description :PropTypes.string.isRequired,
            price :PropTypes.number.isRequired,
            rating :PropTypes.number.isRequired
        }).isRequired,
    quanlity : PropTypes.number.isRequired,
    })
        
    ).isRequired,
    onDeleteProductInCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired,
    onUpdateProductInCart : PropTypes.func.isRequired,
  }
  const mapStateToProps = state =>{
    return {
        cart : state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (CartContainer);
