import React, {Component} from 'react';
// import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import * as Message from './../const/Messager';



class  Product extends Component {
    render(){
 var {product} = this.props;
 console.log("product la",product);
  return (

            <div className="col-4" id={product.id}>
                <img src={product.img} alt=""/>
                <h4>{product.description}</h4>
                <div className="rating">
                     {this.showRatings(product.rating)}
                    {/* <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i> */}
                </div>
                <p>${product.price}</p>   
                <div className="btn" onClick={ () => this.onAddToCart(product) }>Add cart</div>
            </div>
        );
}
    showRatings(rating){
        var result = [];
                for(var i =1 ; i<= rating ; i++){
                    result.push(<i key={i} className="fa fa-star"></i>);
                }
                for(var j =1 ; j<= (5-rating) ; j++){
                    result.push(<i key={i+j} className="fa fa-star-o"></i>);
                }
            return result;
    }
    onAddToCart = (product) => {
            this.props.onAddToCart(product);
            this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
        }
    }
export default Product;
