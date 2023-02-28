import React from 'react';
import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  BrowserRouter as Router, Link,
  Routes, Route
} from 'react-router-dom'

import NavBar from './components/navigation/navBar';
import About from './components/about/about';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Documents from './components/documents/documents';
import Employees from './components/employees/employees';
import Products from './components/products/products';
import MenProductLists from './components/products/menProduct/menProductLists';
import WomenProductLists from './components/products/womenProduct/womenProductLists';
import NotFound from './components/notFound/notFound';
import UserDetails from './components/userDetails/userDetails';
import WomenProductFullDetails from './components/products/productFullDetails/womenProductFullDetails/womenProductFullDetails';
import MenProductFullDetails from './components/products/productFullDetails/menProductFullDetails/menProductFullDetails';
import AddToCart from './components/products/addToCart/addToCart';
import ProductCartCardView from './components/products/productViews/productCartCardView/productCartCardView';
import configureStore from './components/redux/store/configureStore';
import { Provider } from 'react-redux';

function App() {
  const state = configureStore({});

  return (
    <Provider store={state}>
      <Router>

        <NavBar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="documents" element={<Documents />} />

          <Route path="/products" element={<Products />} >
            <Route index element={<MenProductLists />} />
            <Route path="menProducts" element={<MenProductLists />} />
            <Route path="womenProducts" element={<WomenProductLists />} />
            <Route path="cart" element={< AddToCart />} />
          </Route>
          <Route path="employees" element={<Employees />} />
          <Route path="users/addUser" element={<UserDetails addNew={true} />} />
          <Route path="users/:userId" element={<UserDetails addNew={false} />} />
          <Route path="womenProductFullDetails/:productId" element={<WomenProductFullDetails />} />
          <Route path="menProductFullDetails/:productId" element={<MenProductFullDetails />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
