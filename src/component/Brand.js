import React, {Component} from 'react';
import {connect } from 'react-redux';
import logo1 from './images/facebook.png'
import thumb1 from './images/thumb1.png'
import thumb2 from "./images/thumb2.png"
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import logo2 from './images/twitter.png'
import logo3 from './images/instagram.png'
import logo4 from './images/cart.png'




import thumb3 from "./images/thumb3.png"




class  Brand extends Component {

    render(){
   
  return (


    <div className="brands">
    <div className="small-container">
        <div className="row">
            <div className="col-5">
                <img src="./images/logo-godrej.png" alt=""/>
            </div>
            <div className="col-5">
                <img src="./images/logo-oppo.png" alt=""/>
            </div>
            <div className="col-5">
                <img src="./images/logo-coca-cola.png" alt=""/>
            </div>
            <div className="col-5">
                <img src="./images/logo-paypal.png" alt=""/>
            </div>
            <div className="col-5">
                <img src="./images/logo-philips.png" alt=""/>
            </div>
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


export default connect(mapStateToProps,null) (Brand);
