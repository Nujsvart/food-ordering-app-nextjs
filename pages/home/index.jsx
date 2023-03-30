import About from "@/components/layout/About";
import Campaigns from "@/components/layout/Campaigns";
import MenuWrapper from "@/components/menuproducts/MenuWrapper";
import Caraousel from "@/components/ui/Caraousel";
import Form from "@/components/Form/Form";

const Index = () => {
  return (
    <div className="w-full h-screen -mt-[5.5rem]">
      <Caraousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Form />
    </div>
  );
};

export default Index;
