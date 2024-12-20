import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Skeleton from "@mui/material/Skeleton";
import Search from "../Components/Search";
import Features from "../Components/Features";
import FeaturesSmall from "../Components/FeaturesSmall";
import Footer from "../Components/Footer";
import ProductsGrid from "../Components/ProductsGrid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "react-toastify/dist/ReactToastify.css";

function Collection() {
  const URL = "https://anotherchance-production.up.railway.app/products/filter?query=";
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState();

  useEffect(() => {
    document.title = `Another Chance | Search`;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let currentURL = window.location.href;
    let decodedURL = decodeURIComponent(currentURL);
    let parts = decodedURL.split("/");
    const searchTerm = parts[parts.length - 1];

    const fetchProducts = async () => {
      setFetching(true);
      await axios
        .get(`${URL}${searchTerm}&page=${pageNumber}`)
        .then((res) => {
          setProducts(res.data.products);
          setNumberOfPages(res.data.pages);
          setFetching(false);
        })
        .catch(() => {
          setFetching(false);
          toast.info("No Results Found");
        });
    };

    fetchProducts();
  }, [pageNumber]);


  const changePage = (event, value) => {
    setPageNumber(value);
    window.scrollTo(0, 0);
  }

  const [fetching, setFetching] = useState(true);

  // const select = useRef(null);

  // useEffect(() => {
  //   let sortingOrder = select.current.value;
  //   let tempArray = [...products];
  //   if (sortingOrder === "lth") {
  //     tempArray.sort((a, b) => parseFloat(a.inventory.price) - parseFloat(b.inventory.price));
  //   } else {
  //     tempArray.sort((a, b) => parseFloat(b.inventory.price) - parseFloat(a.inventory.price));
  //   }
  //   setProducts(tempArray);
  // }, []);

  // const handleSort = (e) => {
  //   let sortingOrder = e.target.value;
  //   let tempArray = [...products];
  //   if (sortingOrder === "lth") {
  //     tempArray.sort((a, b) => parseFloat(a.inventory.price) - parseFloat(b.inventory.price));
  //   } else {
  //     tempArray.sort((a, b) => parseFloat(b.inventory.price) - parseFloat(a.inventory.price));
  //   }
  //   setProducts(tempArray);
  // };

  return (
    <>
      <Search />
      <div className="bg-[#f1f1ef] pb-6 px-3 md:px-8 md:pb-12">
        <div className="bg-white p-8">
          <h2 className="text-lightGreen text-3xl sm:text-4xl font-bold mb-6">Products</h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:items-center sm:justify-between mb-8">
            <span className="text-[#979a9b] lg:text-xl">Showing {products.length} results</span>
            {/* <select ref={select} onChange={handleSort} name="Sort Products" id="" className="border-2 border-[#e6e6e6] py-2 text-[#666] focus:outline-none sm:w-[300px]">
              <option defaultValue={true}>Default</option>
              <option value="lth">Price Low To High</option>
              <option value="htl">Price High To Low</option>
            </select> */}
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
          <div className="flex justify-center my-6 space-x-5">
            <Stack spacing={2}>
              <Pagination page={pageNumber} onChange={changePage} count={numberOfPages} />
            </Stack>
          </div>
        </div>
      </div>
      <Features />
      <FeaturesSmall />
      <Footer />
    </>
  );
}

export default Collection;
