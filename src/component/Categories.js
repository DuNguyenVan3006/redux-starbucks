import React, {Component} from 'react';
import {connect } from 'react-redux';
import logo1 from './images/facebook.png'
import thumb1 from './images/thumb1.png'
import thumb2 from "./images/thumb2.png"
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'


import thumb3 from "./images/thumb3.png"




class  Categories extends Component {
    render(){
   
  return (
    <div class="categories">
    <div class="small-container">
        <h2 class="litle">All Products</h2>
        <div class="row">
        {this.props.children}
        </div>
    </div>
</div>
    );
}
}

const mapStateToProps = state =>{
    return {
        cart : state.cart
    }
}


export default connect(mapStateToProps,null) (Categories);
