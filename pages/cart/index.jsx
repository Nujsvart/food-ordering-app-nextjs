import CartItem from "@/components/cart/CartItem";
import ShoppingCart from "@/components/cart/ShoppingCart";

const Cart = () => {
  return (
    <div className=" w-full h-[calc(100vh_-_5.5rem)] py-10 px-10 ">
      <div className="flex flex-col lg:flex-row  space-y-10 lg:space-x-5 h-full lg:space-y-0">
        <table className="table lg:flex-1 lg:self-start ">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th className="bg-secondary/90 ">
                <label>
                  <input type="checkbox" className="checkbox border-gray-400" />
                </label>
              </th>
              <th className="text-center bg-secondary/90">Product</th>
              <th className="text-center bg-secondary/90">Extras</th>
              <th className="text-center bg-secondary/90">Price</th>
              <th className="text-center bg-secondary/90">Quantity</th>
            </tr>
          </thead>
          <CartItem />
        </table>
        <ShoppingCart />
      </div>
    </div>
  );
};

export default Cart;
