import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, INCREMENT, DECREMENT } from "../actions/types";


const initState = {
    quantity: 0,
    product: []
}

const cartReduer = (state = initState, action) => {
     switch(action.type){

        case INCREMENT:{
            return{quantity: state.quantity +1}
        }

        case DECREMENT:{
            return{quantity: state.quantity > 0 ? quantity - 1 : quantity}
        }

          case ADD_TO_CART: {
            return {
                cart: [
                    ...state.cart,
                    {
                        product: action.productInfo,
                        quantity: action.quantity
                    }
                ]
            }
        }
            
        case REMOVE_FROM_CART: {
            const item_index = action.index;
            const new_state = {...state};
            new_state.cart.splice(item_index, 1);
            return new_state;
        }

        case CLEAR_CART: {
            const new_state = {...state};
            new_state.cart = [];
            return new_state;
        }

        default:
            return state;
    }
}
export default cartReduer;