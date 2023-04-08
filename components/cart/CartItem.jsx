import Image from "next/image";
import { useSelector } from "react-redux";

const CartItem = () => {
  const cart = useSelector(state => state.cart);
  console.log(cart);
  return (
    <tbody>
      {cart.products.map(product => (
        <tr key={product.id}>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td className="text-center">
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <Image
                    src="/images/food.png"
                    alt="pizza food"
                    layout="fill"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">{product.name}</div>
              </div>
            </div>
          </td>
          <td className="text-center ">
            {product.extraOptions.map(extra => (
              <span key={extra.id} className="badge  badge-md">
                {extra.name}
              </span>
            ))}
          </td>
          <td className="text-center">${product.price}</td>
          <td className="text-center">{product.quantity}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default CartItem;
