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




class  Testimonial extends Component {

    render(){
   
  return (
    <div className="testimonial">
    <div className="small-container">
        <div className="row">
            <div className="col-3">
                <i className="fa fa-quote-left"></i>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <img src="./images/user-1.png" alt=""/>
                <h3>Sean Parker</h3>
            </div>
            <div className="col-3">
                <i className="fa fa-quote-left"></i>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <img src="./images/user-2.png" alt=""/>
                <h3>Sean Parker</h3>
            </div> 
            <div className="col-3">
                <i className="fa fa-quote-left"></i>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <img src="./images/user-3.png" alt=""/>
                <h3>Sean Parker</h3>
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


export default connect(mapStateToProps,null) (Testimonial);
