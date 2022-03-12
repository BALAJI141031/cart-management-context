import { createContext, useContext, useReducer } from "react";

const cartContext = createContext({ price: 0, count: 0 });

const CartProvider = ({ children }) => {
  const reducerFn = (state, action) => {
    switch (action.type) {
      case "add_to_cart":
        return {
          ...state,
          price: state.price + action.price,
          counter: state.counter + 1
        };
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(reducerFn, { price: 0, counter: 0 });
  console.log(state);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
