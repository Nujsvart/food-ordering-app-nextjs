import Image from "next/image";

const CartItem = () => {
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td className="text-center">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <Image src="/images/food.png" alt="pizza food" layout="fill" />
              </div>
            </div>
            <div>
              <div className="font-bold">Good Pizza</div>
            </div>
          </div>
        </td>
        <td className="text-center ">
          <span className="badge  badge-md">mayonez, aci sos, ketcap</span>
        </td>
        <td className="text-center">$20</td>
        <td className="text-center">1</td>
      </tr>
    </tbody>
  );
};

export default CartItem;
