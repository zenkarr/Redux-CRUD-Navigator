import React, { useState } from "react";
import './menProductLists.css';
import ProductCardView from "../productViews/productCardView/productCardView";
import { MenProductArrayList } from "../productArrayList/menProductArrayList";
import { NavLink, useNavigate, useParams, Link, Outlet } from 'react-router-dom';

export default function MenProductLists() {
    const navigate = useNavigate();
    const [productArrayList, setProductArrayList] = useState(MenProductArrayList);
    const [search, setSearch] = useState("");

    const filteredData = productArrayList.filter((product: any) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="MenProduct">
               <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className="search-input"
                />
            </div>

            {/* <ProductCardView
                name={"bag"} actualPrice={5000.0} discountPrice={4000.0} discount={"20%"}
                imageUrl={"https://i.imgur.com/xdbHo4E.png"} description={"A Men bag"}
            />

            <ProductCardView
                name={"T-shirts"} actualPrice={5000.0} discountPrice={4000.0} discount={"30%"}
                imageUrl={"https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} description={"A pack of shirts"}
            />

            <ProductCardView
                name={"Laptop"} actualPrice={500000.0} discountPrice={400000.0} discount={"10%"}
                imageUrl={"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} description={"A Dell Laptop"}
            />

            <ProductCardView
                name={"Shoe"} actualPrice={5000.0} discountPrice={3000.0} discount={"50%"}
                imageUrl={"https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} description={"A Men shoe"}
            />

            <ProductCardView
                name={"T-Shirt"} actualPrice={500.0} discountPrice={300.0} discount={"20%"}
                imageUrl={"https://www.datocms-assets.com/56262/1633338865-shirt.jpg"} description={"A white t-shirt"}

            />
            <ProductCardView
                name={"Jeans"} actualPrice={5000.0} discountPrice={3000.0} discount={"50%"}
                imageUrl={"https://media.istockphoto.com/photos/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-picture-id1281304280"} description={"A Men jeans"}
            />

            <ProductCardView
                name={"white Shoe"} actualPrice={5000.0} discountPrice={3000.0} discount={"50%"}
                imageUrl={"https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} description={"A white Men shoe"}
            />

            <ProductCardView
                name={"Wallet"} actualPrice={5000.0} discountPrice={3000.0} discount={"30%"}
                imageUrl={"https://www.datocms-assets.com/56262/1633338869-fancy-wallet.jpg"} description={"A fancy wallet"}
            />

            <ProductCardView
                name={"watch"} actualPrice={5000.0} discountPrice={3000.0} discount={"50%"}
                imageUrl={"https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} description={"A black watch"}
            />
            <ProductCardView
                name={"Cup"} actualPrice={50.0} discountPrice={25.0} discount={"50%"}
                imageUrl={"https://www.datocms-assets.com/56262/1633338802-cup.jpg"} description={"A tea cup"}
            /> */}

            {/* here using map get dynamic MenProductArrayList array value and send to ProductCardView */}
            <div className="product-card-grid">

            {filteredData.map((list: any, index) => (
                <div key={index}>

                    <ProductCardView
                        name={list.name}
                        actualPrice={list.actualPrice}
                        discountPrice={list.discountPrice}
                        discount={list.discount}
                        imageUrl={list.imageUrl}
                        description={list.description}
                        onClickButton={() => navigate(`/menProductFullDetails/${list.id}`)}
                    />
                </div>
            ))}
        </div>
        </div>
    );

}