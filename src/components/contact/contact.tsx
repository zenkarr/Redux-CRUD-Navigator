import React from "react";

import {useNavigate} from 'react-router-dom';

export default function Contact(){
    const navigate = useNavigate();
return (
<div>

<h2>I am inside Contact</h2>
<button onClick={() => navigate('/products')} >go to product</button>

</div>
);

}