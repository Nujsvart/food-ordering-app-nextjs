const OrderTable = () => {
  return (
    <table className="table w-full ">
      {/* head */}
      <thead>
        <tr className="text-white">
          <th className="text-center bg-secondary/90">Order Id</th>
          <th className="text-center bg-secondary/90">Customer</th>
          <th className="text-center bg-secondary/90">Address</th>
          <th className="text-center bg-secondary/90">Total</th>
        </tr>
      </thead>

      <tbody>
        {/* row 1 */}
        <tr>
          <td className="text-center">63565445...</td>
          <td className="text-center ">
            <span className="badge  badge-md">Isim Soyisim</span>
          </td>
          <td className="text-center">New York</td>
          <td className="text-center">$20</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderTable;
