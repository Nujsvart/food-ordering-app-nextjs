import Header from "./layout/Header";
import Footer from "./layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
