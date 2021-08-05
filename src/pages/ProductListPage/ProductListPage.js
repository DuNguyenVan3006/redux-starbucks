import React, { Component } from 'react';
import CategoriesContainer from './../../container/CategoriesContainer'
import { Link } from 'react-router-dom';
import apiCall from './../../ultil/apiCall'
import {connect } from 'react-redux';



class ProductListPage extends Component {
    constructor (props){
        super(props);
        this.state ={
            products : []
        };
   }
   componentDidMount(){
    apiCall('products', 'GET', null).then(res => {
        this.setState({
                products : res.data 
        })
    })
   }
   
    render() {
        var {products}  = this.state;
        console.log(products)
        return (
            <div >
               <CategoriesContainer products={products} />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         fetchAllProducts : () => {
//             dispatch(actFetchProductsRequest());
//         },
//         onDeleteProduct : (id) => {
//             dispatch(actDeleteProductRequest(id));
//         }
//     }
// }

export default connect(mapStateToProps, null)(ProductListPage);