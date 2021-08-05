
import React, { Component } from 'react';
import * as Message from './../const/Messager';

class CartItem extends Component {

    render() {
        var { item } = this.props;
        var { quanlity } = item;
        return (
            <tr>
                <th scope="row" >
                    <img  className="img-cart" src={item.product.img}
                        alt={quanlity} />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.description}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                <span className="qty">{quanlity} </span>

                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            onClick={() => this.onUpdateQuanlity(item.product, item.quanlity - 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a>—</a>
                        </label>
                        <label
                            onClick={() => this.onUpdateQuanlity(item.product, item.quanlity + 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.product.price, item.quanlity)}$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => this.onDelete(item.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }

    onUpdateQuanlity = (product, quanlity) => {
        if (quanlity > 0) {
            var { onUpdateProductInCart, onChangeMessage } = this.props;
            onUpdateProductInCart(product, quanlity);
            onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }

    onDelete = (product) => {
        var { onDeleteProductInCart, onChangeMessage } = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    showSubTotal = (price, quanlity) => {
        return price * quanlity;
    }

}

export default CartItem;