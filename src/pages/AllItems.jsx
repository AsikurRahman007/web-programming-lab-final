import { useState } from "react";
import { TbListDetails } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";

const AllItems = () => {
  const allItemsData = useLoaderData();
  const [allItems, setAllItems] = useState(allItemsData);

  const handleSortBtn = () => {
    {
      allItems.sort(function (a, b) {
        return a.price - b.price;
      });
      console.log(allItems);
    }
    setAllItems([...allItems], allItems);
  };

  return (
    <div className="w-5/6 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">
        All Items: {allItems.length}
      </h1>
      <div className="w-full text-left flex justify-end my-5">
        <button
          onClick={handleSortBtn}
          className="btn rounded-none bg-black text-white"
        >
          Sort by Price
        </button>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg text-black">Sl No.</th>
              <th className="text-lg text-black">Name</th>
              <th className="text-lg text-black">Category</th>
              <th className="text-lg text-black">Price</th>
              <th className="text-lg text-black">Details</th>
            </tr>
          </thead>
          <tbody>
            {allItems.map((item, idx) => (
              <tr key={idx} className="bg-base-200 border-b-2 border-gray-300">
                <th>{idx + 1}</th>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}$</td>
                <td>
                  <Link
                    to={`/auth/details/${item._id}`}
                    className="btn text-white bg-gray-400"
                  >
                    <TbListDetails />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItems;
