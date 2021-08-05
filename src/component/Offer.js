import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class  Offer extends Component {
    render(){

  return (
    <div className="offer">
    <div className="small-container">
        <div className="row">
            <div className="col-2">
                <img src="./images/trasua.png" className="offer-img" />
            </div>
            <div className="col-2">
                <p>Exclusively Available on RedStore</p>
                <h1>Milk Tea</h1>
                <small>
                The term "milk tea" refers to any tea drink with milk added. 
                It can be as simple as a splash of milk in a hot cup of tea, 
                or it can be a complex recipe including various ingredients, 
                like the popular bubble tea. Adding milk mellows and smooths out the flavors of tea,
                particularly some of the bitter notes found in black tea. 
                Milk tea is enjoyed throughout the world as both a hot and cold beverage.
                 </small>
                 <Link to="/product-list">
                <a href="" className="btn">Buy Now &#8594;</a>
                 </Link>
            </div>
        </div>
    </div>
</div>
 );
}
}

export default  Offer 