import * as Types  from './../const/ActionType'
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];
// var initialState = [
//     {
//         product :{
//             id : 2,
//             img :'https://cdn.tgdd.vn/2021/03/CookProduct/1200-1200x676-93.jpg',
//             description : 'Ao xanh duong',
//             price : 4,
//             rating:5
//         },
//         quanlity :5
//     },
//     {
//         product :{
//             id : 3,
//             img :'https://bizweb.dktcdn.net/100/421/036/files/tra-sua-la-gi-top-hop-15-cach-lam-tra-sua-truyen-thong-de-kinh-doanh-4.jpg?v=1617174768096',
//             description : 'San pham cua apple',
//             price : 1,
//             rating:3
//         },
//         quanlity :5
//     },
//     {
//         product :{
//             id : 5,
//     img :'http://file.hstatic.net/1000135323/article/tra_sua_trai_cay_2_9a03614a41c74b5db1211bbf9bdbfb9d.jpg',
//     description : 'Ao xanh duong',
//     price : 1,
//     rating:2
//         },
//         quanlity :5
//     }
// ];
const cart = (state = initialState, action) => {
    var { product, quanlity } = action;
    var index = -1; // Không tìm thấy => index = -1
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quanlity += quanlity;
            } else {
                state.push({
                    product,
                    quanlity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quanlity = quanlity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;