import Image from "next/image";
import Title from "./Title";

import Slider from "react-slick";

const Caraousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autopalySpeed: 3500,
    appendDots: dots => (
      <div>
        <ul className="relative">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 border bg-white rounded-full"></div>
    ),
  };
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/caraousel.jpg"
        layout="fill"
        objectFit="cover"
        alt="caraousel-bg"
      />
      <Slider {...settings}>
        <div className="h-screen">
          <div className="container relative flex flex-col items-start justify-center h-full mx-auto text-white z-99 gap-y-7 ">
            <Title className="font-bold text-7xl">Fast Food Restaurant</Title>
            <p className="sm:w-2/3 w-full text-2xl font-light">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <button className="btn-primary font-bold  mt-3">Order Now</button>
          </div>
        </div>

        <div className="h-screen">
          <div className="container relative flex flex-col items-start justify-center h-full mx-auto text-white z-99 gap-y-7 ">
            <Title className="font-bold text-7xl">Fast Food Restaurant</Title>
            <p className="sm:w-2/3 w-full text-2xl font-light">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <button className="btn-primary font-bold  mt-3">Order Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Caraousel;
