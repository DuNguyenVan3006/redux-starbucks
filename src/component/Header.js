import React, {Component} from 'react';
// import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import {connect } from 'react-redux';
import { Route, Link  } from 'react-router-dom';
// import { Redirect } from 'react-router';
import logo from './images/logo.jpg'
import Footerbrand from './Footerbrand.js'
import logo1 from './images/facebook.png'
import logo2 from './images/twitter.png'
import logo3 from './images/instagram.png'
import logo4 from './images/cart.png'
const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Menu',
        to: '/product-list',
        exact: false
    },
    {
        name: 'Whats New',
        to: '/about',
        exact: false
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false
    },
    {
        name: 'Cart',
        to: '/cart',
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li >
                        <a>
                        <Link to={to}>
                            {label}
                        </Link>
                        </a>
                    </li>
                );
            }}
        />
    );
};

class  Header extends Component {
 
    render(){
        var {cart} = this.props;
        // var logo = './images/logo.jpg'
        
  return (
    <section>
    <header>
        <a href="#" ><img src={logo} className="logo"/></a>
        <div className="navigationn">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
      
            <label for="navi-toggle" className="navigation__button" ><span className="navigation__icon">&nbsp;</span></label>
      
            <div className="navigation__background">&nbsp;</div>
      
            <nav className="navigation__nav">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <a href="#" className="navigation__link"
                    ><span>01</span>Home</a
                  >
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link"><span>02</span>Menu</a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link"><span>03</span> What's New</a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link"><span>04</span> Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        <ul className="navigation">
        {this.showMenus(menus)}
        </ul>
        <ul className="sci">
                        <li><a href="#" ><img src={logo1} alt=""/></a></li>
                        <li><a href="#" ><img src={logo2} alt=""/></a></li>
                        <li><a href="#"> <img src={logo3} alt=""/></a></li>
                        <Link to="/cart">
                        <li><a href="#"> <img src={logo4} alt=""/></a></li>
                        <div className="cart-count flex-center" ><p class="cart-items">{this.totalCart(cart)} </p></div>
                        </Link>
                      
                    </ul>
    </header>
</section>



   
  );
}




showMenus = (menus) => {
    var result = null;
    if(menus.length > 0){
        result = menus.map((menu, index) => {
            return (
                <MenuLink 
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                />
            );
        });
    }
    return result;
}

totalCart=(cart)=> {
    var result =null;
    if(cart.length >0){
        result = cart.reduce(( acc, curr ) => acc + curr.quanlity ,0)
    }
    else {
        result =0;
    }
return result
}
}

const mapStateToProps = state =>{
    return {
        cart : state.cart
    }
}


export default connect(mapStateToProps,null) (Header);
