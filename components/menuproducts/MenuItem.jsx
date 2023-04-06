import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const MenuItem = () => {
  return (
    <div className="flex flex-col box bg-secondary rounded-xl overflow-hidden ">
      <Link href="/product">
        <div className="bg-[#f1f2f3] rounded-b-3xl flex justify-center relative ">
          <Image
            src="/images/f1.png"
            width={160}
            height={160}
            alt="pizza"
            className="py-5 hover:scale-105 transition-all duration-500"
          />
        </div>
      </Link>

      <div className="p-5 flex flex-col gap-y-5   ">
        <h4 className="font-bold">Delicious Pizza</h4>
        <p className="text-sm">
          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque
        </p>
        <div className="flex justify-between items-center">
          <p>$20</p>
          <button className="btn-primary rounded-full w-8 h-8 !p-0 grid place-content-center">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
