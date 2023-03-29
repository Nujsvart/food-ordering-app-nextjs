import Image from "next/image";
import Title from "../ui/Title";
import { FaShoppingCart } from "react-icons/fa";

const CampaignItem = ({ campaignPicture, alt, titleName }) => {
  return (
    <div className="flex-grow bg-secondary flex gap-x-4 p-5 rounded-md shadow-md shadow-neutral-300">
      <div className="relative w-[165px] h-[165px] rounded-full  border-primary border-4 overflow-hidden">
        <Image
          src={campaignPicture}
          layout="fill"
          alt={alt}
          className="rounded-full hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col justify-around">
        <Title className="text-3xl">{titleName}</Title>
        <p className="font-dancing">
          <span className="text-3xl font-bold">20%</span> Off
        </p>
        <button className="btn-primary whitespace-nowrap flex gap-x-5  items-center">
          Order Now <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex sm:container mx-auto my-20 sm:flex-row flex-col gap-5 text-white justify-center px-4 sm:px-0">
      <CampaignItem
        campaignPicture="/images/o1.jpg"
        alt="hamburger"
        titleName="Tasty Thursday"
      />

      <CampaignItem
        campaignPicture="/images/o2.jpg"
        alt="pizza"
        titleName="Pizza Days"
      />
    </div>
  );
};

export default Campaigns;
