import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputForm = ({ productData }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(productData);

  // const {
  //   _id,
  //   name,
  //   category,
  //   description,
  //   price,
  //   rating,
  //   customization,
  //   processingTime,
  //   stockStatus,
  //   photo,
  //   userEmail,
  //   userName,
  // } = productData;

  const handleAddItem = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const photo = form.photoUrl.value;
    const userEmail = user.email;
    const userName = user.displayName;

    const item = {
      name,
      category,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      photo,
      userEmail,
      userName,
    };

    console.log(item);

    if (location.pathname === `/auth/update/${productData?._id}`) {
      fetch(
        `https://flexsports-hub-server-site.vercel.app/products/${productData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const notify = () =>
            toast.success("Item Updated Successfully", {
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
    } else {
      fetch("https://flexsports-hub-server-site.vercel.app/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const notify = () =>
            toast.success("Item Added Successfully", {
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
          form.reset();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="w-11/12 md:w-5/6 mx-auto lg:p-10 rounded-2xl">
      {/* form section  */}
      <div>
        <form onSubmit={handleAddItem} className="card-body">
          {/* form Name row */}
          <div className="flex flex-col md:flex-row w-full gap-6 ">
            <div className="form-control w-full">
              <label className=" label">
                <span className="text-xl md:text-2xl font-semibold">
                  Item Name
                </span>
              </label>

              <input
                type="text"
                placeholder="Enter item name"
                name="name"
                className="input input-bordered rounded-none"
                defaultValue={productData?.name}
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-xl md:text-2xl font-semibold">
                  Category Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter category name"
                name="category"
                defaultValue={productData?.category}
                className="input input-bordered rounded-none"
                required
              />
            </div>
          </div>

          {/* form description row */}
          <div className="flex flex-col md:flex-row w-full gap-6 ">
            <div className="form-control w-full">
              <label className=" label">
                <span className="text-xl md:text-2xl font-semibold">
                  Description
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter item description"
                name="description"
                defaultValue={productData?.description}
                className="input input-bordered rounded-none"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-xl md:text-2xl font-semibold">Price</span>
              </label>
              <input
                type="text"
                placeholder="Enter item price"
                defaultValue={productData?.price}
                className="input input-bordered rounded-none"
                name="price"
                required
              />
            </div>
          </div>

          {/* form rating row */}
          <div className="flex flex-col md:flex-row w-full gap-6 ">
            <div className="form-control w-full">
              <label className=" label">
                <span className="text-xl md:text-2xl font-semibold">
                  Rating
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter item rating"
                name="rating"
                defaultValue={productData?.rating}
                className="input input-bordered rounded-none"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-xl md:text-2xlfont-semibold">
                  Customization
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter item customization"
                className="input input-bordered rounded-none"
                name="customization"
                defaultValue={productData?.customization}
                required
              />
            </div>
          </div>

          {/* form processing time row */}
          <div className="flex flex-col md:flex-row w-full gap-6 ">
            <div className="form-control w-full">
              <label className=" label">
                <span className="text-xl md:text-2xl font-semibold">
                  Processing Time
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter item processing time"
                name="processingTime"
                defaultValue={productData?.processingTime}
                className="input input-bordered rounded-none"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className=" label">
                <span className="text-xl md:text-2xl font-semibold">
                  Stock Status
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter item stock status"
                name="stockStatus"
                defaultValue={productData?.stockStatus}
                className="input input-bordered rounded-none"
                required
              />
            </div>
          </div>
          {/* form Photo row */}
          <div className="flex w-full gap-6 ">
            <div className="form-control w-full">
              <label className=" label">
                <span className="text-xl md:text-2xl font-semibold">
                  Item Photo
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter item photo url"
                name="photoUrl"
                defaultValue={productData?.photo}
                className="input input-bordered rounded-none"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-lg bg-black border-2 rounded-none text-white font-bold text-xl">
              {location.pathname === `/auth/update/${productData?._id}`
                ? "Update Item"
                : "Add Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

InputForm.propTypes = {
  productData: PropTypes.object,
  // _id: PropTypes.string,
  // name: PropTypes.string,
  // category: PropTypes.string,
  // description: PropTypes.string,
  // price: PropTypes.string,
  // rating: PropTypes.string,
  // customization: PropTypes.string,
  // processingTime: PropTypes.string,
  // stockStatus: PropTypes.string,
  // photo: PropTypes.string,
};

export default InputForm;
