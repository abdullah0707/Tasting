import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, INCREMENT, DECREMENT } from "./types";

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}


export function addToCart(productInfo, quantity){
    return {
        type: ADD_TO_CART,
        productInfo,
        quantity
    }
}

export function createRemoveFromCartAction(index) {
    return {
        type: REMOVE_FROM_CART,
        index
    }
}

export function removeFromCart(index) {
    return (dispatsh) => {
       dispatsh(createRemoveFromCartAction(index));
    };
}

export function clearCart() {
    return {
        type: CLEAR_CART
        
    }
}