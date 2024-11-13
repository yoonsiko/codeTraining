import { createContext, useState, useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products.js';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => { },
  updateItemQuantity: () => { },
});

function shoppingCartReducer(state, action) {
  if (action.type === 'add-item') {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, // not needed here because we have only 1 value
      items: updatedItems,
    };
  };

  if (action.type = 'update-item') {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  };
};

export default function CartContextProvider({ children }) {
  const [shoppingReducerState, shoppingDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  function handleAddItemToCart(id) {
    shoppingDispatch({
      type: 'add-item',
      payload: id,
    })
  };

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingDispatch({
      type: 'update-item',
      payload: {
        productId,
        amount
      }
    });
  };
  const ctxValue = {
    items: shoppingReducerState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity
  };

  return <CartContext.Provider value={ctxValue} >
    {children}
  </CartContext.Provider>
}