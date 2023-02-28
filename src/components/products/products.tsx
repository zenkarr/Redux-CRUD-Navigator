import React from "react";
import {NavLink , Link, Outlet} from 'react-router-dom';
import './products.css';

export default function Products(){
return (
<div className="childNavBar">
{/* <NavLink to='/products/menProducts'>MenProducts</NavLink>
<NavLink to='/products/womenProducts'>WomenProducts</NavLink> */}

<NavLink to='/products/menProducts'>MenProducts</NavLink>
<NavLink to='/products/womenProducts'>WomenProducts</NavLink>
<NavLink to='/products/cart'>Cart</NavLink>

<Outlet/>
</div>
);

}