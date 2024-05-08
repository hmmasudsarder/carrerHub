import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
