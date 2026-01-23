import { AiFillProduct } from "react-icons/ai";
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";

const AboutUs = () => {
  return (
    <div>
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b-4 border-black"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-black text-2xl md:text-3xl lg:text-5xl font-bold">
            About Us
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
        <div className=" p-10 space-y-6 shadow-xl">
          <AiFillProduct className="text-3xl text-black" />
          <h1 className="text-3xl font-bold">
            Large selection of quality sports goods
          </h1>
          <p className="text-xl">
            A wide array of sporting goods to choose from. Are you ready?
          </p>
        </div>
        <div className="shadow-xl p-10 space-y-6">
          <BsFileEarmarkSpreadsheetFill className="text-3xl text-black" />
          <h1 className="text-3xl font-bold">
            Credit card payment in our application
          </h1>
          <p className="text-xl">
            Swipe, tap, done: Seamlessly secure payments in just a click!
          </p>
        </div>
        <div className="shadow-xl p-10 space-y-6">
          <MdDeliveryDining className="text-3xl text-black" />
          <h1 className="text-3xl font-bold">
            Fast and affordable our delivery
          </h1>
          <p className="text-xl">
            Swift service, wallet-friendly shipping: Your delivery solution!{" "}
          </p>
        </div>
        <div className="shadow-xl p-10 space-y-6">
          <IoCallSharp className="text-3xl text-black" />
          <h1 className="text-3xl font-bold">24/7 support from our partners</h1>
          <p className="text-xl">
            Always here, always ready: round-the-clock partner support!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
