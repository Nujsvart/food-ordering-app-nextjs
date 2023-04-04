import { MdOutlineAccountCircle, MdOutlineExitToApp } from "react-icons/md";
import { RiLockPasswordLine, RiTruckLine } from "react-icons/ri";

import Image from "next/image";

const ProfileCard = ({ tab, setTab }) => {
  const profileNav = [
    {
      id: 1,
      name: "Account",
      icon: <MdOutlineAccountCircle />,
    },
    {
      id: 2,
      name: "Password",
      icon: <RiLockPasswordLine />,
    },
    {
      id: 3,
      name: "Orders",
      icon: <RiTruckLine />,
    },
    {
      id: 4,
      name: "Exit",
      icon: <MdOutlineExitToApp />,
    },
  ];

  return (
    <div className="border h-max sm:w-1/4 items-center flex flex-col justify-center pt-4">
      <div className="avatar online ">
        <div className="w-24 rounded-full relative">
          <Image src="/images/dumush.jpg" layout="fill" />
        </div>
      </div>
      <strong className="my-4">Duman Delibas</strong>
      <ul className="self-start w-full divide-y-2">
        {profileNav.map(nav => (
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

export default ProfileCard;
