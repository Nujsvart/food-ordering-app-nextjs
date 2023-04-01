import Title from "../ui/Title";

import Slider from "react-slick";
import CustomerItem from "./CustomerItem";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const NextBtn = ({ onClick }) => {
  return (
    <button
      className="bg-primary w-8 h-8  flex items-center justify-center rounded-full text-white absolute -bottom-20 left-1/2"
      onClick={onClick}
    >
      <AiOutlineArrowRight />
    </button>
  );
};

const PrevBtn = ({ onClick }) => {
  return (
    <button
      className="bg-primary w-8 h-8  flex items-center justify-center rounded-full text-white  absolute -bottom-20 right-1/2 mr-3"
      onClick={onClick}
    >
      <AiOutlineArrowLeft />
    </button>
  );
};

const Customers = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autopalySpeed: 1000,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-4 relative group space-y-9 mt-10">
      <Title className="text-4xl text-center">What Says Our Customers</Title>
      <div className=" text-white sliderbox group">
        <Slider {...settings}>
          <CustomerItem image="/images/client1.jpg" />
          <CustomerItem image="/images/client2.jpg" />
          <CustomerItem image="/images/client1.jpg" />
          <CustomerItem image="/images/client2.jpg" />
        </Slider>
      </div>
    </div>
  );
};

export default Customers;
