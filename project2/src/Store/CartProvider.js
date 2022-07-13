import { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const UpdatedAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let UpdatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };
        UpdatedItems = [...state.items];
        UpdatedItems[existingCartItemIndex] = updatedItem;
      } else {
        UpdatedItems = state.items.concat(action.item);
      }

      return {
        items: UpdatedItems,
        totalAmount: UpdatedAmount,
      };
    }
    case "REMOVE": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      const UpdatedAmount = state.totalAmount - existingCartItem.price;
      let updatedItems;
      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: UpdatedAmount,
      };
    }
    case "CLEAR" : {
      return defaultCartState ; 
    }
  }
  
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartItem] = useReducer(
    cartReducer,
    defaultCartState
  );

  const AddItemToCartHandler = (item) => {
    dispatchCartItem({ type: "ADD", item: item });
  };

  const RemoveItemFromCartHandler = (id) => {
    dispatchCartItem({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () =>{
    dispatchCartItem({type: "CLEAR"})
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: AddItemToCartHandler,
    removeItem: RemoveItemFromCartHandler,
    clearCart : clearCartHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
