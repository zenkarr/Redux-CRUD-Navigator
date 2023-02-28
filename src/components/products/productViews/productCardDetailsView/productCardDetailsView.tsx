import React,{useState} from "react";

import { useNavigate } from 'react-router-dom';
import './productCardDetailsView.css';
import {useSelector , useDispatch } from 'react-redux';
import { type } from "os";
import { GET_SELECTED_PRODUCT,UPDATE_SELECTED_PRODUCT } from "../../../redux/action/actionType";
import { getProduct,updateProduct } from "../../../redux/action/addToCartAction";
interface IProductCardDetailsView {
  name: string;
  actualPrice:number;
  discountPrice: number;
  discount : string;
  imageUrl ?: string;
  description: string;
  newItem ?: any
}

export default function ProductCardDetailsView({name,actualPrice,discountPrice,discount,imageUrl,description,newItem}: IProductCardDetailsView) {
  const navigate = useNavigate();
  // const stocks = useSelector((state: any) => state.addToCart);
  // console.log(stocks);
  const dispatch = useDispatch();
  
  const [addMenProduct, setaddMenProduct] = useState({
    menProduct: [],

});

  const addToCartMenProducts = (newItem:any) => {
    dispatch(updateProduct('menProduct',newItem));
    console.log("newItem",newItem);
    navigate('/products/cart');

}
  return (

    <div className="card">
      <div className="card-left">
        <img src={imageUrl} alt="Product Image" />
        <div className="card-left-buttons">
          <button className="Add-to-cart" onClick={() => addToCartMenProducts(newItem)}>Add to cart</button>
          <button className="buy-now">Buy now</button>
        </div>
      </div>
      <div className="card-right">
        <h3>{name} - {description}</h3>
        <div >
        <div className="card-price"><strong> ${discountPrice} </strong><small>${actualPrice} </small> <span className="card-price-discount"> {discount} off</span></div>
        </div>
        <div className="card-offers">
          <h2>Available offers</h2>
          <p><strong>Special Price - </strong> <>Get extra ₹1500 off (price inclusive of cashback/coupon)T&C</></p>
          <p><strong>Bank Offer - </strong>10% off on Federal Bank Debit and Credit Card, up to ₹1,250. On orders of ₹5,000 and aboveT&C</p>
          <p><strong>Bank Offer - </strong>10% off on HSBC Credit Card and EMI Transactions, up to ₹1,250. On orders of ₹5,000 and aboveT&C</p>
          <p><strong>Bank Offer - </strong>Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm accountT&C</p>

        </div>

        <div className="card-size">
          <label >Select Size:</label>
          <select id="size-select">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>
    </div>


  );

}