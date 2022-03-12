import { useCart } from "./cart-context";

const itemsInCart = [
  {
    id: 1,
    name: "kala chasma",
    price: 1000
  },
  {
    id: 2,
    name: "laal chhadi",
    price: 500
  },
  {
    id: 3,
    name: "jalebi",
    price: 50
  },
  {
    id: 4,
    name: "japani joota",
    price: 10000
  }
];

const Products = () => {
  const { dispatch } = useCart();
  return (
    <div>
      {itemsInCart.map((item) => {
        return (
          <ul>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <button
              onClick={() =>
                dispatch({ type: "add_to_cart", price: item.price })
              }
            >
              add to cart
            </button>
          </ul>
        );
      })}
    </div>
  );
};

export { Products };
