import React from "react";
import CartItem from "../Components/CartItem";
import { connect } from 'react-redux';
import { clearCart } from '../store/actions/actions';


function Cart(props){

   function placeOrder(){
        // send the request to the server
        // clear cart
       props.clearCart();
        alert('We recieved your order, and we are working on it.');
    };
   

    return (
        <div>
            <div className="row justify-content-start py-4 mx-4 my-5">
                {props.cartItems.map((item, index) =>
                    <div className={"col-3 m-2"} key={index}>
                        <CartItem item={item} index={index} />
                    </div>
            )}

                <div className="col-4 justify-content-end Checkout">
                    <div>
                    <input type="text" placeholder="Coupon Code or Gift Card"/>
                    <button type="button" className="btn btn-light btn-sm m-0">App</button>
                    </div>
                    <p>
                        Shipping: FREE
                    </p>
                    <hr />
                    <h3>
                        Total: {props.total}$
                    </h3>
                        <button className="btn btn-dark" onClick={placeOrder}>Checkout Now</button>
                    </div>
                    
                </div>
            </div>
        
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart()),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
