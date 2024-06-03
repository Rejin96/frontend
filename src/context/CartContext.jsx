import {createContext,useReducer} from "react";

export const CartContext = createContext();

const reducer =(state,action) => {
    switch(action.type){
        case "ADD":
            let cartItem = action.payload;
            let itemIndex = state.cart.findIndex((c) => c._id == cartItem._id);
            if(itemIndex!== -1){
                let newCart = [...state.cart];                 
                newCart[itemIndex].qty += 1;
                return {...state,cart:newCart};   
            }

            cartItem.qty = 1;
            return {...state, cart:[...state.cart, cartItem]};

        case "UPDATE":
            let qty = action.payload.qty;
            let _id = action.payload._id;
            let itemIdx = state.cart.findIndex((c) => c._id == _id);
            newCart = {...state.cart};
            newCart[indexIdx].qty = qty;
            return {...state,cart:newCart};
    }
};

export default function CartProvider({children}){
    const [state,dispatch] = useReducer(reducer,{
        cart:[],
    });
    return <CartContext.Provider value ={{...state,dispatch}}>{children}</CartContext.Provider>;
}