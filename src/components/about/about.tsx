import React from "react";
import img from './image/cave.jpg';
import './about.css';
import {useNavigate} from 'react-router-dom';

export default function About(){
  const navigate = useNavigate();

return (
<div className="about">
<div className="about-section">
  <h1>About Us Page</h1>
  <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
  <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</div>

<h2>Our Team</h2>
<div className="row">
    <div className="card">
    {/* <img alt='nature' src={logo} width="300" height="300" ></img> */}
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>reprehenderit in voluptate velit describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button" onClick={() => navigate('/contact')}>Contact</button></p>
      </div>
  </div>
</div>

</div>
);

}