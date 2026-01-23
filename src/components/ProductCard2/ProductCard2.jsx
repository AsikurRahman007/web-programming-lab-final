import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard2 = ({ product, myItems, setMyItems }) => {
  const {
    _id,
    name,
    // category,
    // description,
    price,
    // rating,
    // customization,
    // processingTime,
    stockStatus,
    photo,
    // userEmail,
    // userName,
  } = product;

  const handleDeleteBtn = (id) => {
    fetch(`https://flexsports-hub-server-site.vercel.app/products/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const notify = () =>
          toast.error("Item Deleted", {
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
        if (data.deletedCount > 0) {
          const remaining = myItems.filter((item) => item._id !== id);
          setMyItems(remaining);

          notify();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl rounded-none">
      <figure>
        <img className="w-72 h-72" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        {/* rating */}
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-black"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-black"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-black"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-black"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-black"
          />
        </div>

        <h2 className="card-title">{name}</h2>
        <p className="font-medium text-black">$ {price}</p>
        <div className="card-actions justify-start">
          <p className="font-medium text-gray-500">
            {stockStatus} stocks available
          </p>
        </div>
        <div className="join">
          <Link to={`/auth/update/${_id}`} className="btn join-item btn-info">
            Update
          </Link>
          <button
            onClick={() => handleDeleteBtn(_id)}
            className="btn join-item btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard2.propTypes = {
  product: PropTypes.object,
  myItems: PropTypes.array,
  setMyItems: PropTypes.func,
};

export default ProductCard2;
