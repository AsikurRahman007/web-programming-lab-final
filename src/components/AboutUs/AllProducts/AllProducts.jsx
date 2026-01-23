import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = () => {
  const allProducts = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
      {allProducts.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default AllProducts;
