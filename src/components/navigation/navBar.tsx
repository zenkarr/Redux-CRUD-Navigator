import React from "react";
import {NavLink} from 'react-router-dom';
import './navBar.css';

export default function NavBar(){
    
return (
<div className="NavBar">
<NavLink  to='/'>Home</NavLink>
<NavLink to='/about'>About</NavLink>
<NavLink to='/contact'>Contact</NavLink>
<NavLink to='/products'>Products</NavLink>
<NavLink to='/documents'>Documents</NavLink>
<NavLink to='/employees'>Employees</NavLink>

</div>
);

}