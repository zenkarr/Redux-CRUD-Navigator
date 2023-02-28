import React, { useState } from "react";
import './addToCart.css'
import { NavLink, useNavigate, useParams, Link, Outlet } from 'react-router-dom';
import ProductCartCardView from "../productViews/productCartCardView/productCartCardView";
import { MenProductArrayList } from "../productArrayList/menProductArrayList";
import { useSelector, useDispatch } from 'react-redux';

export default function AddToCart() {

    // here using useParams get dynamic product id from url
    let { productId } = useParams();
    const menProductList = useSelector((state: any) => state.addToCart.menProduct);
    console.log("menProductList", menProductList);
    // here using find get particular productId array data from MenProductArrayList
    // const productDetailsInfo = MenProductArrayList.find((product) => product.id === Number(menProductId));
    // console.log("productDetailsInfo", productDetailsInfo);


    return (
        <div className="addToCart">

            {menProductList && menProductList.map((list: any, index: any) => (
                <div key={index}>
                    <ProductCartCardView
                        name={list ? list.name : ""}
                        actualPrice={list ? list.actualPrice : 0}
                        discountPrice={list ? list.discountPrice : 0}
                        discount={list ? list.discount : ""}
                        imageUrl={list ? list.imageUrl : ""}
                        description={list ? list.description : ""}
                    />
                </div>
            ))}

            {/* {menProductList &&
                <ProductCartCardView
                    name={menProductList ? menProductList.name : ""}
                    actualPrice={menProductList ? menProductList.actualPrice : 0}
                    discountPrice={menProductList ? menProductList.discountPrice : 0}
                    discount={menProductList ? menProductList.discount : ""}
                    imageUrl={menProductList ? menProductList.imageUrl : ""}
                    description={menProductList ? menProductList.description : ""}
                />
            } */}
        </div>
    );

}