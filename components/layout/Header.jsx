import { useState } from "react";
import Logo from "../ui/Logo";
import SearchModal from "../ui/SearchModal";
import { FaUserAlt, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  return (
    <header
      className={`h-[5.5rem] z-50 relative ${
        router.asPath !== "/" && "bg-secondary"
      }`}
    >
      <div className="container flex items-center justify-between h-full mx-auto text-white">
        <Logo />

        <nav
          className={`absolute top-0 left-0 w-full h-screen sm:static text-center sm:bg-transparent bg-white sm:flex hidden sm:w-auto sm:h-auto ${
            isMenuOpen && "!grid place-content-center"
          }`}
        >
          <ul className="flex flex-col text-black uppercase sm: sm:gap-x-5 gap-y-4 sm:text-white sm:flex-row">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Book Table</a>
            </li>
          </ul>
          {isMenuOpen && (
            <button
              className="absolute z-50 right-10 top-5"
              onClick={() => setIsMenuOpen(false)}
            >
              <GrClose size={30} />
            </button>
          )}
        </nav>

        <div className="flex items-center gap-x-3">
          <a href="#">
            <FaUserAlt className="transition-all hover:text-primary" />
          </a>
          <a href="#">
            <FaShoppingCart className="transition-all hover:text-primary" />
          </a>
          <button onClick={() => setIsOpen(true)}>
            <FaSearch className="transition-all hover:text-primary" />
          </button>
          <a href="#" className="hidden md:flex whitespace-nowrap">
            <button className="btn-primary">Order Online</button>
          </a>
          <button
            className="sm:hidden "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="transition-all hover:text-primary" />
          </button>
        </div>
      </div>
      {isOpen && <SearchModal setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
