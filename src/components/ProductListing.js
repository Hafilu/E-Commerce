import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
 
import { useDispatch } from "react-redux";
import { fetchProducts  } from "../redux/actions/productAction";
function ProductListing(props) {
  const dispatch = useDispatch();
//   const FetchProducts = async () => {
//     const response = await axios
//       .get("https://fakestoreapi.com/products")
//       .catch((err) => {
//         console.log(err);
//       });
//     dispatch(setProducts(response.data));
//   };

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
