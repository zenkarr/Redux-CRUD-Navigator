import React from "react";

import { useNavigate, NavLink } from 'react-router-dom';
import './productCardView.css';

interface IProductCardView {
    name: string;
    actualPrice:number;
    discountPrice: number;
    discount : string;
    imageUrl: string;
    description: string;
    onClickButton:(event:any) => void;

}



export default function ProductCardView({name,actualPrice,discountPrice,discount,imageUrl,description,onClickButton}: IProductCardView) {

    const navigate = useNavigate();
    return (
        <div className="product-card" onClick={onClickButton}>
            <div className="product-tumb">
                <img src={imageUrl} alt="" />
            </div>
            <div className="product-details">
                <h1 className="product-catagory"><NavLink to='/productDetails'>{name}</NavLink></h1>
                <div className="product-fullDetails"><p>{description}</p></div>
                <div >
                    <div className="product-price">${discountPrice} <small>${actualPrice} </small> <span className="product-price-discount "> {discount} off</span></div>
                </div>

                <div className="product-bottom-details">
                    <div className="product-size"><small>Size </small>M,L,XL</div>
                </div>

            </div>
        </div>
    );

}