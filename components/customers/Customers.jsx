import Title from "../ui/Title";

import Slider from "react-slick";
import CustomerItem from "./CustomerItem";

const Customers = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autopalySpeed: 1000,
  };

  const customerDetails = [
    {
      id: 1,
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                illo mollitia distinctio quia voluptatem ab, libero similique
                reprehenderit placeat sapiente!`,
      name: "Moana Mitchell",
      signature: "magna aliqua",
      image: "/images/client1.jpg",
    },
    {
      id: 2,
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                illo mollitia distinctio quia voluptatem ab, libero similique
                reprehenderit placeat sapiente!`,
      name: "Mike Hamell",
      signature: "magna aliqua",
      image: "/images/client2.jpg",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col items-center py-4 gap-y-8 relative">
      <Title className="text-4xl">What Says Our Customers</Title>
      <div className="flex text-white gap-x-5 sliderbox">
        {customerDetails.map(customer => (
          <CustomerItem key={customer.id} customer={customer} />
        ))}
      </div>

      <div className="flex gap-x-4">
        <button className="btn-primary w-4 flex items-center justify-center rounded-full">
          sol
        </button>
        <button className="btn-primary w-4 flex items-center justify-center rounded-full">
          sag
        </button>
      </div>
    </div>
  );
};

export default Customers;
