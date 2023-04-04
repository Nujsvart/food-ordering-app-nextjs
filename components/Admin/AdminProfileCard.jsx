import { MdOutlineExitToApp } from "react-icons/md";
import { RiTruckLine } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { FaRegFolder } from "react-icons/fa";
import { CgProductHunt } from "react-icons/cg";
import Image from "next/image";

const adminNav = [
  {
    id: 1,
    name: "Products",
    icon: <CgProductHunt />,
  },
  {
    id: 2,
    name: "Orders",
    icon: <RiTruckLine />,
  },
  {
    id: 3,
    name: "Categories",
    icon: <BiCategoryAlt />,
  },
  {
    id: 4,
    name: "Footer",
    icon: <FaRegFolder />,
  },
  {
    id: 5,
    name: "Exit",
    icon: <MdOutlineExitToApp />,
  },
];

const AdminProfileCard = ({ tab, setTab }) => {
  return (
    <div className="border h-max sm:w-1/4 items-center flex flex-col justify-center pt-4">
      <div className="avatar online ">
        <div className="w-24 rounded-full relative">
          <Image src="/images/admin.png" layout="fill" />
        </div>
      </div>
      <strong className="my-4">Admin</strong>
      <ul className="self-start w-full divide-y-2">
        {adminNav.map(nav => (
          <li
            key={nav.id}
            onClick={() => setTab(nav.id)}
            className={`px-4 py-2 flex items-center gap-2 hover:bg-primary hover:text-white cursor-pointer ${
              tab === nav.id && "bg-primary"
            }`}
          >
            {nav.icon} {nav.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProfileCard;
