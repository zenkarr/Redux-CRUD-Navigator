import React, { useState } from "react";
import './womenProductLists.css';
import ProductCardView from "../productViews/productCardView/productCardView";
import { WomenProductArrayList } from "../productArrayList/womenProductArrayList";
import { NavLink, useNavigate, useParams, Link, Outlet } from 'react-router-dom';

export default function WomenProductLists() {
    const [productArrayList, setProductArrayList] = useState(WomenProductArrayList);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const filteredData = productArrayList.filter((product: any) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="WomenProduct">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className="search-input"
                />
            </div>
            <div className="product-card-grid">
                {filteredData.map((list: any, index) => (
                    <div key={index} className="product-card">
                        <ProductCardView
                            name={list.name}
                            actualPrice={list.actualPrice}
                            discountPrice={list.discountPrice}
                            discount={list.discount}
                            imageUrl={list.imageUrl}
                            description={list.description}
                            onClickButton={() => navigate(`/womenProductFullDetails/${list.id}`)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

}
