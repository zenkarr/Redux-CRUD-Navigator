import React, { useState } from "react";
import ProductCardDetailsView from "../../productViews/productCardDetailsView/productCardDetailsView";
import './menProductFullDetails.css'
import { MenProductArrayList } from "../../productArrayList/menProductArrayList";
import { NavLink, useNavigate, useParams, Link, Outlet } from 'react-router-dom';
import {useSelector , useDispatch } from 'react-redux';



export default function MenProductFullDetails() {

    // here using useParams get dynamic product id from url
    let { productId } = useParams();
    const stocks = useSelector((state: any) => state);
    console.log(stocks);
    // here using find get particular productId array data from MenProductArrayList
    const productDetailsInfo = MenProductArrayList.find((product) => product.id === Number(productId));

    return (
        <div className="menProductFullDetails">

            <ProductCardDetailsView
                // newItem={productDetailsInfo ? productDetailsInfo.id : 0}
                newItem={productDetailsInfo }

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