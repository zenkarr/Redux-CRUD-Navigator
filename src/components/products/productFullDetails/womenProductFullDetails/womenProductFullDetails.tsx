import React, { useState } from "react";
import ProductCardDetailsView from "../../productViews/productCardDetailsView/productCardDetailsView";
import './womenProductFullDetails.css'
import { WomenProductArrayList } from "../../productArrayList/womenProductArrayList";
import { NavLink, useNavigate, useParams, Link, Outlet } from 'react-router-dom';


export default function WomenProductFullDetails() {

    // here using useParams get dynamic product id from url
    let { productId } = useParams();

    // here using find get particular productId array data from MenProductArrayList
    const productDetailsInfo = WomenProductArrayList.find((product) => product.id === Number(productId));

    return (
        <div className="womenProductFullDetails">

            <ProductCardDetailsView
                name={productDetailsInfo ? productDetailsInfo.name : ""}
                actualPrice={productDetailsInfo ? productDetailsInfo.actualPrice : 0}
                discountPrice={productDetailsInfo ? productDetailsInfo.discountPrice : 0}
                discount={productDetailsInfo ? productDetailsInfo.discount : ""}
                imageUrl={productDetailsInfo ? productDetailsInfo.imageUrl : ""}
                description={productDetailsInfo ? productDetailsInfo.description : ""}
            />
        </div>
    );

}