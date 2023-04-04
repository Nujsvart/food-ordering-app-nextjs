import { MdOutlinePayments } from "react-icons/md";
import { BiHappyAlt } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillBagCheckFill } from "react-icons/bs";

const OrderStatus = () => {
  return (
    <div className="flex justify-between w-full bg-primary px-6 py-4">
      <div className="flex flex-col items-center">
        <MdOutlinePayments size={80} /> <span>Payment</span>
      </div>
      <div className="flex flex-col items-center animate-pulse">
        <BiHappyAlt size={80} />
        <span>Preparing</span>
      </div>
      <div className="flex flex-col items-center">
        <TbTruckDelivery size={80} />
        <span>On the way</span>
      </div>
      <div className="flex flex-col items-center">
        <BsFillBagCheckFill size={80} />
        <span>Delivered</span>
      </div>
    </div>
  );
};

export default OrderStatus;
