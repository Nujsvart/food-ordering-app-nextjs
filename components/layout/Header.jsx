import { useState } from "react";
import Logo from "../ui/Logo";
import SearchModal from "../ui/SearchModal";
import { FaUserAlt, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  console.log(router);

  const products = useSelector(state => state.cart.products);

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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/booktable">Book Table</Link>
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
          <Link href="auth/login">
            <FaUserAlt className="transition-all hover:text-primary" />
          </Link>
          <Link href="/cart">
            <FaShoppingCart className="transition-all hover:text-primary" />
            <span>{products.length > 0 && products.length}</span>
          </Link>
          <button onClick={() => setIsOpen(true)}>
            <FaSearch className="transition-all hover:text-primary" />
          </button>
          <Link href="" className="hidden md:flex whitespace-nowrap">
            <button className="btn-primary">Order Online</button>
          </Link>
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
