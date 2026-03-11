import React, { useState } from "react";
import Hero from "./pages/Hero";
import { Route, Routes, useLocation } from "react-router-dom";
import Collection from "./pages/Collection";
import Header1 from "./component/Header1";
import Footer from "./component/Footer";
import Error from "./Page/Error";
import Products from "./pages/Products";
import AboutUs from "./Page/AboutUs";
import ContactUS from "./Page/ContactUS";
import Faqs from "./Page/Faqspage";
import PageStoreDirection from "./Page/PageStoreDirection";
import PageStoreLocation from "./Page/PageStoreLocation";
import PageTestimonial from "./Page/PageTestimonial";
import Wishlist from "./pages/Wishlist";
import ShopingCart from "./pages/ShopingCart";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Checkout from "./pages/Checkout";
import MobileBottomNav from "./component/MobileBottomNav";
import Approutes from "./Routes/Approutes";

const App = () => {
 
  return (
   <div>
    <Approutes/>
   </div>
  );
};

export default App;
