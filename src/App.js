import './App.css';
import React, { Component } from 'react';
import Header from './component/Header'
import Footer from './component/Footer'


// import CategoriesContainer from './container/CategoriesContainer'
// import Offer from './component/Offer'
// import Testimonial from './component/Testimonial'
// import Brands from './component/Brands'
// import Footer from './component/Footer'
// import CartContainer from './container/CartContainer'
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  render(){

 
  return (
    <Router>
    <div >
      <Header/>
                    <div className="container">
                        <div className="row">
                            {this.showContentMenus(routes)}
                        </div>
                    </div>
         <Footer/>
    </div>
    </Router>
  );
}
showContentMenus = (routes) => {
  var result = null;
  if (routes.length > 0) {
      result = routes.map((route, index) => {
          return (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
              />
          );
      });
  }
  return <Switch>{result}</Switch>;
}
}
export default App;
