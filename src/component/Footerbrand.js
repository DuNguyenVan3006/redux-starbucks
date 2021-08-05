import React, {Component} from 'react';
import {connect } from 'react-redux';

import thumb1 from './images/thumb1.png'
import thumb2 from "./images/thumb2.png"
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'





import thumb3 from "./images/thumb3.png"




class  Footerbrand extends Component {
    changeCircleColor =(color,img) => {
        const circle = document.querySelector('.circle');
        const circle1 = document.querySelector('.btn');
        const circle2 = document.querySelector('.trada');
        circle2.style.color = color;
        circle1.style.background = color;
        circle.style.background = color;
        document.querySelector('.starbucks').src = img;
       }
    render(){
      return (
            <div>
                    <div className="circle"></div>
                    <div className="content">
                        <div className="textBox">
                            <h2>It's no just Coffee <br/> It's <span className="trada">TràĐá</span> </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <a href="" className="btn">Learn More &#8594;</a>
                        </div>
                        <div className="imgBox">
                            <img src={img1} className='starbucks'/>
                        </div>
                    </div>
                    <ul className="thumb">
                        <li><img src={thumb1} alt="" onClick={() => this.changeCircleColor('#ffc800',img1)} /> </li>
                        <li><img src= {thumb2} alt="" onClick={() => this.changeCircleColor('#3b7495',img2 )} /></li>
                        <li><img src={thumb3} alt=""onClick={() => this.changeCircleColor('#d752b1',img3)} /></li>
                    </ul>
                   
            </div>
  );



}
}

const mapStateToProps = state =>{
    return {
        cart : state.cart
    }
}


export default connect(mapStateToProps,null) (Footerbrand);
