import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";

const Index = () => {
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
            $10
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
              <div className="relative">
                <Image
                  src="/images/pizzasize.png"
                  width={40}
                  height={40}
                  alt="pizza"
                />
                <span className="absolute -top-2 -right-6 text-xs bg-primary rounded-full px-3 py-0.5 font-medium">
                  Small
                </span>
              </div>
              <div className="relative">
                <Image
                  src="/images/pizzasize.png"
                  width={50}
                  height={50}
                  alt="pizza"
                />
                <span className="absolute -top-2 -right-6 text-xs bg-primary rounded-full px-3 py-0.5 font-medium">
                  Medium
                </span>
              </div>
              <div className="relative">
                <Image
                  src="/images/pizzasize.png"
                  width={60}
                  height={60}
                  alt="pizza"
                />
                <span className="absolute -top-2 -right-6 text-xs bg-primary rounded-full px-3 py-0.5 font-medium">
                  Large
                </span>
              </div>
            </div>
          </div>
          <div className="grid gap-y-4">
            <h4 className="font-bold">Choose additional ingredients</h4>
            <div className="flex gap-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="ketcap"
                  id="ketcap"
                  className="accent-primary mr-2"
                />
                <span className="text-sm font-semibold">Ketcap</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="mayonez"
                  id="mayonez"
                  className="accent-primary mr-2"
                />
                <span className="text-sm font-semibold">Mayonez</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="acisos"
                  id="acisos"
                  className="accent-primary mr-2"
                />
                <span className="text-sm font-semibold">Aci Sos</span>
              </label>
            </div>
          </div>
          <button className="btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
