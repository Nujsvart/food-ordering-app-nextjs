import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import SearchModal from "../ui/SearchModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-[5.5rem] bg-secondary">
      <div className="container flex items-center justify-between h-full mx-auto text-white">
        <Logo />

        <nav>
          <ul className="flex uppercase gap-x-5">
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
          <a href="#">
            <button className="btn-primary">Order Online</button>
          </a>
        </div>
      </div>
      {isOpen && <SearchModal setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
