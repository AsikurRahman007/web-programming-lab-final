import { useLoaderData } from "react-router-dom";
import ProductCard2 from "../components/ProductCard2/ProductCard2";
import { useState } from "react";

const MyItems = () => {
  const myItemsData = useLoaderData();
  const [myItems, setMyItems] = useState(myItemsData);
  return (
    <div className="mt-10 lg:mt-20 w-11/12 lg:w-5/6 mx-auto">
      <h1 className="text-3xl text-black font-bold text-center mb-10">
        My Items
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {myItems.map((product) => (
          <ProductCard2
            key={product._id}
            product={product}
            myItems={myItems}
            setMyItems={setMyItems}
          ></ProductCard2>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
