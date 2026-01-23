import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/1.png";
// import user from "../../assets/banner-4.jpeg";
import "./Navbar.css";
import { MdMenu } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import ThemeOption from "../ThemeOption/ThemeOption";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        console.log("user logged out successfully");
        const notify = () =>
          toast.error("Logged Out Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        notify();
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <div className="text-lg font-medium text-black flex flex-col md:flex-row gap-5">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/auth/all-items"}>All Items</NavLink>
      <NavLink to={"/auth/add-items"}>Add Items</NavLink>
      <NavLink to={`/auth/my-items/${user?.email}`}>My Items</NavLink>
    </div>
  );

  return (
    <div className="navbar bg-base-200">
      {/* navbar start  */}
      <div className="navbar-start justify-between md:justify-start">
        <div className="flex items-center">
          <img src={logo} className="w-24 h-24" alt="" />
          <a className="-ml-2 hidden lg:flex text-3xl font-bold">
            flexSports Hub
          </a>
        </div>
      </div>

      {/* navbar center */}
      <div className="navbar-center  md:flex">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden text-3xl -ml-10"
          >
            <MdMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1 hidden md:flex">{links}</ul>
      </div>

      {/* navbar end */}
      <div className="navbar-end gap-4">
        {user ? (
          <div className="flex gap-2">
            <img
              data-tooltip-id="my-tooltip"
              data-tooltip-place="top"
              src={user?.photoURL}
              className=" w-10 md:w-12 h-10 md:h-12 object-cover rounded-full"
              alt=""
            />
            <Tooltip id="my-tooltip" className="z-10">
              <div className="text-center">
                <p>{user?.displayName}</p>
                <p>{user?.email}</p>
              </div>
            </Tooltip>
            <Link
              onClick={handleLogout}
              className="btn  rounded-none bg-black text-white text-xl font-medium md:font-semibold"
            >
              Logout
            </Link>
          </div>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn  rounded-none bg-black text-white text-xl font-medium md:font-semibold"
          >
            Login
          </Link>
        )}
        <ThemeOption></ThemeOption>
      </div>
    </div>
  );
};

export default Navbar;
