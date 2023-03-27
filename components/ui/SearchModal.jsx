import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import Image from "next/image";
import { GrClose } from "react-icons/gr";

const SearchModal = ({ setIsOpen }) => {
  return (
    <div className="absolute top-0 left-0 z-50 grid w-screen h-screen bg-black place-content-center bg-opacity-40">
      <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
        <div className="relative p-5 bg-white rounded-md shadow-lg md:w-[600px] w-[370px] ">
          <button onClick={() => setIsOpen(false)}>
            <GrClose className="absolute w-6 h-6 right-3 top-3" />
          </button>
          <Title className="text-[2.5rem] text-center pb-4">Search</Title>
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border outline-primary border-primary"
          />
          <div className="w-full my-5 ">
            <ul>
              <li className="flex items-center justify-between p-2 transition-all cursor-pointer hover:bg-primary">
                <div>
                  <Image src="/images/food.png" width={50} height={50} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>

              <li className="flex items-center justify-between p-2 transition-all cursor-pointer hover:bg-primary">
                <div>
                  <Image src="/images/food.png" width={50} height={50} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>

              <li className="flex items-center justify-between p-2 transition-all cursor-pointer hover:bg-primary">
                <div>
                  <Image src="/images/food.png" width={50} height={50} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>

              <li className="flex items-center justify-between p-2 transition-all cursor-pointer hover:bg-primary">
                <div>
                  <Image src="/images/food.png" width={50} height={50} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
            </ul>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default SearchModal;
