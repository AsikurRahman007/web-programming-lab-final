import { NavLink } from "react-router-dom";
import "./CategoryNavbar.css";

const CategoryNavbar = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      <NavLink
        to={"/"}
        className="btn btn-lg rounded-none px-10 font-semibold text-2xl"
      >
        All Products
      </NavLink>
      <NavLink
        to={`/category/${"Football Boots"}`}
        className="btn btn-lg rounded-none px-10 font-semibold text-2xl"
      >
        Football Boots
      </NavLink>
      <NavLink
        to={`/category/${"Football"}`}
        className="btn btn-lg rounded-none px-10 font-semibold text-2xl"
      >
        Football
      </NavLink>
      <NavLink
        to={`/category/${"Jersey"}`}
        className="btn btn-lg rounded-none px-10 font-semibold text-2xl"
      >
        Jersey
      </NavLink>
    </div>
  );
};

export default CategoryNavbar;
