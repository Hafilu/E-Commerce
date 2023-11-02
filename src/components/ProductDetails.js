import React, { useEffect } from "react";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function ProductDetails(props) {
  const products = useSelector((state) => state.product);
  const { title, image, price, category, description } = products;
  const pid = props.match.params.productID;
  const dispatch = useDispatch();

  const FetchProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${pid}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if(pid && pid!=="")FetchProducts();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [pid]);
  return (
    <div className="ui grid container">
      {Object.keys(products).length === 0 ? (
        <div>
          <p>Loading...</p>
          <h1>Product Details</h1>
        </div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column 1p">
                <img className="ui fluid image" src={image} alt="" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
