import Title from "../ui/Title";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetCart } from "@/redux/Slices/cartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  return (
    <div className="text-white lg:w-1/4 bg-secondary/90 px-6 py-4  lg:pt-4 flex rounded-md flex-col space-y-5  ">
      <Title className="text-3xl ">Cart Total </Title>
      <div className="text font-semibold">
        <p>
          Subtotal: <span className="font-light">${cart.totalPrice}</span>
        </p>
        <p>
          Discount: <span className="font-light">$0</span>
        </p>
        <p>
          Subtotal: <span className="font-light">${cart.totalPrice}</span>
        </p>
      </div>
      <button
        className="btn-primary whitespace-nowrap"
        onClick={() => dispatch(resetCart())}
      >
        Checkout Now!
      </button>
    </div>
  );
};

export default ShoppingCart;
