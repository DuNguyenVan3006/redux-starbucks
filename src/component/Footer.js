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




class  Footer extends Component {

    render(){
   
  return (


    <div className="footer">
    <div className="container">
        <div className="row">
            <div className="footer-col-1">
                <p>Hotline : 0982605778</p>
                <div className="app-logo">
                    <img src="images/play-store.png" alt=""/>
                    <img src="images/app-store.png" alt=""/>
                    
                </div>
            </div>
            <div className="footer-col-2">
                <img src="images/logo.jpg" alt=""/>
            </div>
            <div className="footer-col-3">
                <h3>Userful Links </h3>
                <ul>
                    <li>Coupons</li>
                    <li>Blog post</li>
                    <li>Return Policy</li>
                    <li>Join Affiliate</li>
                </ul>
            </div>
            <div className="footer-col-4">
                <h3>Follow Us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p class="copyright">Copy@right 2020- Du Nguyen </p>
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


export default connect(mapStateToProps,null) (Footer);

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
