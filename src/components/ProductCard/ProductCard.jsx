import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
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

  return (
    <Link
      to={`/auth/details/${product._id}`}
      className="card bg-base-100 w-96 shadow-xl rounded-none"
    >
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
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
