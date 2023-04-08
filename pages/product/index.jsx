import { useState } from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import { addProduct } from "/redux/Slices/cartSlice";
import { useDispatch } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();

  const productInfo = {
    products: [
      {
        id: 1,
        size: "Small",
        name: "Good Pizza",
        width: 40,
        price: 10,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At recusandae placeat beatae doloremque, inventore quidem? Iste illo suscipit nulla nemo!",
        quantity: 1,
        extraOption: {},
      },
      {
        id: 2,
        size: "Medium",
        width: 50,
        price: 20,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At recusandae placeat beatae doloremque, inventore quidem? Iste illo suscipit nulla nemo!",
        name: "Good Pizza",
        quantity: 1,
        extraOption: {},
      },
      {
        id: 3,
        size: "Large",
        width: 60,
        price: 30,
        name: "Good Pizza",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At recusandae placeat beatae doloremque, inventore quidem? Iste illo suscipit nulla nemo!",
        quantity: 1,
        extraOption: {},
      },
    ],
    extras: [
      {
        name: "Ketcap",
        price: 1,
        checked: false,
      },
      {
        name: "Mayonez",
        price: 2,
        checked: false,
      },
      {
        name: "Aci Sos",
        price: 3,
        checked: false,
      },
    ],
  };

  const [price, setPrice] = useState(0);
  const [extras, setExtras] = useState([]);
  const [itemPrice, setItemPrice] = useState(productInfo.products[0].price);

  const handleAddToCart = () => {
    dispatch(
      addProduct({ ...productInfo.products[0], price, extraOptions: extras })
    );
  };

  const handleExtras = item => {
    setExtras(prev => [...prev, item]);
    const newPrice = price + item.price;
    setPrice(newPrice);
  };

  const handleItemPrice = itemPrice => {
    setItemPrice(itemPrice);
    setPrice(itemPrice);
  };

  return (
    <div className="container mx-auto">
      <div className="flex mt-20 gap-20 sm:flex-row flex-col h-screen sm:h-auto">
        <div className="relative flex-1">
          <Image
            src="/images/f1.png"
            layout="fill"
            objectFit="contain"
            alt="pizza"
          />
        </div>
        <div className="flex-1 flex justify-center gap-y-4 flex-col items-start">
          <Title className="text-3xl">Good Pizza</Title>
          <span className="text-primary text-2xl font-bold underline underline-offset-4">
            ${itemPrice}
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            vero repellat deserunt officia aliquid, labore consequatur aliquam
            ab similique distinctio obcaecati amet optio illum non cupiditate
            nobis nulla. Voluptate, soluta?
          </p>
          <div className="grid gap-y-4">
            <h4 className="font-bold">Choose the size</h4>
            <div className="flex gap-x-14 items-center">
              {productInfo.products.map((item, index) => (
                <div
                  className="relative cursor-pointer"
                  key={index}
                  onClick={() => handleItemPrice(item.price)}
                >
                  <Image
                    src="/images/pizzasize.png"
                    width={item.width}
                    height={item.width}
                    alt={item.size}
                  />
                  <span className="absolute -top-2 -right-6 text-xs bg-primary rounded-full px-3 py-0.5 font-medium">
                    {item.size}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-y-4">
            <h4 className="font-bold">Choose additional ingredients</h4>
            <div className="flex gap-x-4">
              {productInfo.extras.map((item, index) => (
                <label className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    name={item.name}
                    id={item.name}
                    checked={item.checked}
                    className="accent-primary mr-2"
                    onChange={() => handleExtras(item)}
                  />
                  <span className="text-sm font-semibold">{item.name}</span>
                </label>
              ))}
            </div>
          </div>
          <button className="btn-primary" onClick={() => handleAddToCart()}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
