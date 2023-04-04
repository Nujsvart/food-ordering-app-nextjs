import Title from "../ui/Title";

const ProfileOrders = () => {
  const orders = [
    {
      id: 1,
      address: "New York",
      date: "12/12/2021",
      total: "$20",
      status: "Pending",
    },
    {
      id: 2,
      address: "New York",
      date: "12/12/2021",
      total: "$20",
      status: "Pending",
    },
    {
      id: 3,
      address: "New York",
      date: "12/12/2021",
      total: "$20",
      status: "Pending",
    },
    {
      id: 4,
      address: "New York",
      date: "12/12/2021",
      total: "$20",
      status: "Pending",
    },
    {
      id: 5,
      address: "New York",
      date: "12/12/2021",
      total: "$20",
      status: "Pending",
    },
    {
      id: 6,
      address: "New York",
      date: "12/12/2021",
      total: "$20",
      status: "Pending",
    },
    {
      id: 7,
      address: "New York",
      date: "12/12/2021",
      total: "$20",
      status: "Pending",
    },
    {
      id: 8,
      address: "New York",
      date: "12/12/2021",
      total: "$20",
      status: "Pending",
    },
    {
      id: 9,
      address: "New York",
      date: "12/12/2021",
      total: "$20",
      status: "Pending",
    },
  ];

  return (
    <div className="w-full">
      <Title className="text-4xl">Orders</Title>
      <table className="table w-full mt-6 " >
        {/* head */}
        <thead>
          <tr className="text-white">
            <th className="text-center bg-secondary/90">Id</th>
            <th className="text-center bg-secondary/90">Address</th>
            <th className="text-center bg-secondary/90">Date</th>
            <th className="text-center bg-secondary/90">Total</th>
            <th className="text-center bg-secondary/90">Status</th>
          </tr>
        </thead>

        <tbody >
          {/* row */}
          {orders.map(order => (
            <tr key={order.id} >
              <td className="text-center ">{order.id}</td>
              <td className="text-center">{order.address}</td>
              <td className="text-center">{order.date}</td>
              <td className="text-center">{order.total}</td>
              <td className="text-center">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileOrders;
