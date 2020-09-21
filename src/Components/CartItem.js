import React, {useState} from "react";
import { connect } from 'react-redux';
import {removeFromCart} from "../store/actions/actions";
import "./CardItem.css";

function CardItem(props){

    const {item, index} = props;
    const {product} = item;

    const [quantity, setQuantity] = useState(props.item.quantity);


  function increment(){
      setQuantity(quantity => quantity + 1);
    }
  
    function decrement(){
      setQuantity(quantity => quantity > 0 ? quantity - 1 : quantity);
    }


    return (
      <div className="card">
            <img src={product.image1} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {product.name}
                </h5>
                <p className="card-text">
                    Price:{product.price} $
                </p>
                <p className="card-text">
                    Total: {quantity * product.price} $
                </p>
                  <div className="def-number-input number-input">
                  <button onClick={decrement} className="minus"></button>
                  <input className="quantity" value={quantity} type="number" />
                  <button onClick={increment} className="plus"></button>
                  </div>
                <button onClick={() => props.removeFromCart(index)} className="btn btn-danger">
                    <i className="fa fa-trash"></i> Delete
                </button>
            </div>
        </div>
    );
  }



export default connect(null, {removeFromCart})(CardItem);
                 
          