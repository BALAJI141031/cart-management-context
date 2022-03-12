import "./styles.css";
import { useCart } from "./cart-context";
import { Products } from "./products-listing";
export default function App() {
  const { state } = useCart();
  const { counter, price } = state;
  return (
    <div className="App">
      <h1>cart price:{price}</h1>
      <h1>items in cart:{counter}</h1>
      <Products />
    </div>
  );
}
