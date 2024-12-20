import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../Services/apiCalls";
import ProductsGrid from "./ProductsGrid";
import Skeleton from "@mui/material/Skeleton";

function NewArrivals() {
  const [fetching, setFetching] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getData("/products/new-arrival");
      if(response){
        setProducts(response);
        setFetching(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h3 className="text-lightGreen text-3xl my-3">New Arrivals</h3>
        <Link to="/collection/all" className="font-semibold text-blackColor pb-1 hover:border-[#262b2c] duration-300 border-b-2 border-lightGreen">
          VIEW ALL PRODUCTS
        </Link>
      </div>
      {fetching ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </div>
        </div>
      ) : (
        <ProductsGrid cardsInfo={products} />
      )}
    </div>
  );
}
export default NewArrivals;
