import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <section className="container mx-auto w-full">
      <div className="flex flex-col items-center gap-y-10 w-full">
        <Title className="text-4xl">Our Menu</Title>
        <div>
          <ul className="flex gap-x-1 sm:gap-x-5 menu-nav justify-center w-full">
            <li>
              <a href="">All</a>
            </li>
            <li>
              <a href="">Burger</a>
            </li>
            <li>
              <a href="">Pizza</a>
            </li>
            <li>
              <a href="">Pasta</a>
            </li>
            <li>
              <a href="">Fries</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white gap-7 w-full  my-10">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
      <div className="flex justify-center">
        <button className="btn-primary mb-8 ">View More</button>
      </div>
    </section>
  );
};

export default MenuWrapper;
