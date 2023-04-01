import About from "@/components/layout/About";
import Campaigns from "@/components/layout/Campaigns";
import MenuWrapper from "@/components/menuproducts/MenuWrapper";
import Caraousel from "@/components/ui/Caraousel";
import Reservation from "@/components/layout/Reservation";
import Customers from "@/components/customers/Customers";

const Index = () => {
  return (
    <div className="w-full -mt-[5.5rem]">
      <Caraousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers />
    </div>
  );
};

export default Index;
