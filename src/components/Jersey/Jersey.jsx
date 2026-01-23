import ProductCard from "../ProductCard/ProductCard";
import { useLoaderData } from "react-router-dom";

const Jersey = () => {
  const jerseysData = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      {jerseysData.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Jersey;
