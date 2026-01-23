import { useLoaderData } from "react-router-dom";

const Details = () => {
  const itemData = useLoaderData();
  const {
    name,
    // category,
    description,
    price,
    // rating,
    customization,
    processingTime,
    stockStatus,
    photo,
    // userEmail,
    // userName,
  } = itemData;

  return (
    <div className="hero bg-white min-h-screen">
      <div className="hero-content gap-20  flex-col lg:flex-row">
        <img src={photo} className="w-1/2 shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{description}</p>
          <div>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 my-5">
            <p className="text-xl font-semibold">
              Price: <span className="font-normal">{price}$</span>
            </p>
            <p className="text-xl font-semibold">
              Customization:{" "}
              <span className="font-normal">{customization}</span>
            </p>
            <p className="text-xl font-semibold">
              Delivery Time:{" "}
              <span className="font-normal">{processingTime}</span>
            </p>
            <p className="text-xl font-semibold">
              Stock Available:{" "}
              <span className="font-normal">{stockStatus}</span>
            </p>
          </div>
          <button className="btn bg-black rounded-none text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
