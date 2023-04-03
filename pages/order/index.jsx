import OrderTable from "@/components/orderTable/OrderTable";
import OrderStatus from "@/components/orderTable/OrderStatus";

const Order = () => {
  return (
    <div className=" w-full h-[calc(100vh_-_5.5rem)] px-10 grid grid-rows-2 place-items-center">
      <OrderTable />

      <OrderStatus />
    </div>
  );
};

export default Order;
