import { useParams } from "react-router-dom";

export function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="text-white p-10">
      <h1 className="text-4xl">Product: {id}</h1>
    </div>
  );
}