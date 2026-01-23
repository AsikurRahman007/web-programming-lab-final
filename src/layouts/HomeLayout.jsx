import { Outlet } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import CategoryNavbar from "../components/CategoryNavbar/CategoryNavbar";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";

const HomeLayout = () => {
  return (
    <div>
      <header className="bg-base-200">
        <nav className="w-full lg:w-5/6 mx-auto">
          <Navbar></Navbar>
        </nav>

        {/* banner section  */}
        <section className="bg-white">
          <Banner></Banner>
        </section>
      </header>

      <main className="mt-10 lg:mt-20 w-11/12 lg:w-5/6 mx-auto">
        <section>
          <FeaturedProducts></FeaturedProducts>
        </section>

        {/* category navbar */}
        <section className="mt-10 lg:mt-20 w-max mx-auto">
          <CategoryNavbar></CategoryNavbar>
        </section>

        {/* product cards */}
        <section className="mt-10 lg:mt-20">
          <Outlet></Outlet>
        </section>

        <section className="mt-10 lg:mt-20">
          <AboutUs></AboutUs>
        </section>

        <section className="mt-10 lg:mt-20">
          <ContactUs></ContactUs>
        </section>
      </main>

      <footer className="mt-10 lg:mt-20 bg-base-200">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
