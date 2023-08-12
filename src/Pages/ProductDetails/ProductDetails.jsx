import "./ProductDetails.css";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../../App";

const ProductDetails = () => {
  const { ProductId } = useParams();
  const { ProductData } = useContext(DataContext);

  const productDetails = ProductData.find(({ id }) => id === Number(ProductId));

  return (
    <div className="product-details-container">
      <Link to="/products">Back</Link>
      <h1>{productDetails.name}</h1>
      <img
        src={productDetails.imageUrl}
        alt="productImage"
        className="productImage"
      />
      <p className="product-info">
        <b>Price : </b> ${productDetails.price}
      </p>
      <p className="product-info">
        <b>Stock : </b>
        {productDetails.stock}
      </p>
      <p className="product-info">
        <b>Supplier : </b>
        {productDetails.supplier}
      </p>
      <p className="product-info">
        <b>Department : </b>
        {productDetails.department}
      </p>
      <p className="product-info">
        <b>SKU : </b>
        {productDetails.sku}
      </p>
      <p className="product-info">
        <b>Delivered : </b>
        {productDetails.delivered}
      </p>
      <p className="product-info">
        <b>Description : </b>
        {productDetails.description}
      </p>
    </div>
  );
};
export default ProductDetails;
