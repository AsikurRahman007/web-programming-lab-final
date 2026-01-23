// import footerBg from "../../assets/footer-bg.jpeg";
// import footerBg2 from "../../assets/footer-bg-2.jpeg";
import logo from "../../assets/1.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto p-5 md:pt-16 lg:p-20">
      {" "}
      <footer className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between  text-base-content">
        <aside className="w-full md:w-[25%]">
          <img src={logo} className="-mt-7 w-40 h-40 mx-auto" alt="" />
          <p className="text-center">
            Sentiments two occasional affronting solicitude travelling and one
            contrasted fortune day.
          </p>
        </aside>
        <nav className="flex flex-col gap-1 text-center">
          <h6 className="text-black text-xl font-semibold">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col gap-1 text-center">
          <h6 className="text-black text-xl font-semibold">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col gap-1 text-center">
          <h6 className="text-black text-xl font-semibold">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="divider my-10"></div>
      <div className="  flex items-center justify-between ">
        <p>flexSports Hub © 2024 Created By XTemos Studio</p>
        <div className="flex items-center gap-6">
          <p>Our Social links:</p>
          <div className="flex gap-5">
            <FaFacebook className="text-3xl" />
            <FaSquareInstagram className="text-3xl" />
            <FaSquareXTwitter className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
