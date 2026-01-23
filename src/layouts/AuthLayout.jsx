import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";

const AuthLayout = () => {
  return (
    <div>
      <header className="bg-base-200">
        <nav className="w-full lg:w-5/6 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="mt-10 lg:mt-20">
        <Outlet></Outlet>
      </main>

      <footer className="mt-10 lg:mt-20 bg-base-200">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
