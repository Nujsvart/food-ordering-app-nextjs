import Title from "../ui/Title";

const orderItems = [
  {
    id: 1,
    customer: "John Doe",
    total: "$20",
    payment: "Cash",
    status: "Pending",
    action: "Next Stage",
  },
  {
    id: 2,
    customer: "John Doe",
    total: "$20",
    payment: "Cash",
    status: "Pending",
    action: "Next Stage",
  },
  {
    id: 3,
    customer: "John Doe",
    total: "$20",
    payment: "Cash",
    status: "Pending",
    action: "Next Stage",
  },
  {
    id: 4,
    customer: "John Doe",
    total: "$20",
    payment: "Cash",
    status: "Pending",
    action: "Next Stage",
  },
];

const Orders = () => {
  return (
    <div className="w-full">
      <Title className="text-4xl">Orders</Title>
      <table className="table w-full mt-5">
        {/* head */}
        <thead>
          <tr className="text-white">
            <th className="text-center bg-secondary/90">Product</th>
            <th className="text-center bg-secondary/90">Customer</th>
            <th className="text-center bg-secondary/90">Total</th>
            <th className="text-center bg-secondary/90">Payment</th>
            <th className="text-center bg-secondary/90">Status</th>
            <th className="text-center bg-secondary/90">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          {orderItems.map(item => (
            <tr key={item.id}>
              <td className="text-center">{item.id}</td>
              <td className="text-center">{item.customer}</td>
              <td className="text-center">{item.total}</td>
              <td className="text-center">{item.payment}</td>
              <td className="text-center">{item.status}</td>
              <td className="text-center">
                <button className="btn btn-sm btn-success text-white">
                  {item.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
