import React from "react";

import { useNavigate } from 'react-router-dom';
import './productCartCardView.css';

interface IProductCardDetailsView {
  name: string;
  actualPrice:number;
  discountPrice: number;
  discount : string;
  imageUrl ?: string;
  description: string;
}

export default function ProductCartCardView({name,actualPrice,discountPrice,discount,imageUrl,description}: IProductCardDetailsView) {
  const navigate = useNavigate();
  return (

    <div className="cardCart">
      <div className="cardCart-left">
        <img src={imageUrl} alt="Product Image" />
      </div>
      <div className="cardCart-right">
        <h3>{name} - {description}</h3>
        <div >
        <div className="cardCart-price"><strong> ${discountPrice} </strong><small>${actualPrice} </small> <span className="card-price-discount"> {discount} off</span></div>
        </div>
        <div className="cardCart-right-buttons">
          <button className="save-for-later"><strong>Save for Later</strong></button>
          <button className="remove"><strong>Remove</strong></button>
        </div>
      </div>
    </div>


  );

}