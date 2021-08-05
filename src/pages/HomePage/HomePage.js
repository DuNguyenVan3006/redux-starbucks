import React , { Component } from 'react'
import Categories from './../../component/Categories'
import Footerbrand from './../../component/Footerbrand'
import Testimonial from './../../component/Testimonial'
import Brand from './../../component/Brand'
import Offer from './../../component/Offer'

// import Offer from './../../component/Offer'
// import Testimonial from './../../component/Testimonial'
// import Brands from './../../component/Brands'
// import CartContainer from './../../container/CartContainer'

class ProductList extends Component {
    render() {
        return (
                  <div>
                        <Footerbrand/>
                        <Offer/>
                       {/* <Categories/> */}
                       <Testimonial/>
                       <Brand/>
                  </div>
           );
    }
}

export default ProductList;