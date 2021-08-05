
import React, { Component } from 'react';


class Cart extends Component {
    render() {
        var { children } = this.props;
        return (
            <section1 className="section12123">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th className="soluong">Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { children }
                        </tbody>
                    </table>
                </div>
            </section1>
        );
    }
}

export default Cart;