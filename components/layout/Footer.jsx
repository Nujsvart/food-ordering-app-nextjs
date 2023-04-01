import Title from "../ui/Title";
import { IoLocation } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {
  SiFacebook,
  SiTwitter,
  SiLinkedin,
  SiInstagram,
  SiPinterest,
} from "react-icons/si";

import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div
      className={`bg-secondary text-white py-5 ${
        router.asPath !== "/" ? "mt-20" : "mt-[8rem]"
      }`}
    >
      <div className="container mx-auto grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-none py-12 gap-y-10 sm:gap-y-0">
        <div className="flex flex-col items-center gap-y-3">
          <Title className="text-2xl font-light">Contact Us</Title>
          <div>
            <a
              href="#"
              className="flex items-center gap-x-2 hover:text-primary"
            >
              <IoLocation /> <span>Location</span>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex items-center gap-x-2 hover:text-primary"
            >
              <BsFillTelephoneFill /> <span>Call +01 1234567890</span>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex items-center gap-x-2 hover:text-primary"
            >
              <GrMail /> <span>demo@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <Title className="text-2xl font-light">Feane</Title>
          <p className="text-center font-light">
            Necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with
          </p>
          <div className="flex gap-x-2 items-center justify-center">
            <a href="#" className="hover:text-primary">
              <SiFacebook size="1.5rem" />
            </a>
            <a href="#" className="hover:text-primary">
              <SiTwitter size="1.5rem" />
            </a>
            <a href="#" className="hover:text-primary">
              <SiLinkedin size="1.5rem" />
            </a>
            <a href="#" className="hover:text-primary">
              <SiInstagram size="1.5rem" />
            </a>
            <a href="#" className="hover:text-primary">
              <SiPinterest size="1.5rem" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <Title className="text-2xl font-light">Opening Hours</Title>
          <span className="font-light">Everyday</span>
          <span className="font-light">10.00 Am - 10.00 Pm</span>
        </div>
      </div>
      <p className="text-center text-sm">
        © 2023 All Rights Reserved By Free Html Templates
      </p>
    </div>
  );
};

export default Footer;
