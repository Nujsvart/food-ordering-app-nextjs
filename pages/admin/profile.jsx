import { useState } from "react";
import AdminProfileCard from "@/components/Admin/AdminProfileCard";
import Products from "@/components/Admin/Products";
import Orders from "@/components/Admin/Orders";
import Categories from "@/components/Admin/Categories";
import Footer from "@/components/Admin/Footer";

const Index = () => {
  const [tab, setTab] = useState(1);

  return (
    <div className="flex h-[calc(100vh_-_5.5rem)] container mx-auto sm:space-x-10 pt-10 flex-col sm:flex-row space-y-10 sm:space-y-0">
      <AdminProfileCard tab={tab} setTab={setTab} />
      {tab === 1 && <Products />}
      {tab === 2 && <Orders />}
      {tab === 3 && <Categories />}
      {tab === 4 && <Footer />}
      {tab === 5 && <div>Not Found</div>}
    </div>
  );
};

export default Index;
