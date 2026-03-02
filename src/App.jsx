import React from "react";
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

    

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/checkout';

  return (
    <div className="flex flex-col min-h-screen overflow-x-clip">
      {!hideHeaderFooter && <Header1 />}
      {/* <main className="flex-grow"> */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/collection" element={<Collection />} />
           <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="/about-Us" element={<AboutUs/>}/>
          <Route path="*" element={<Hero />} />
          <Route path="/404" element={<Error/>}/>
          <Route path="/contact" element={<ContactUS/>}/>
          <Route path="/Frequently-Asked-Questions" element={<Faqs/>}/>
          <Route path="/page-store-direction" element={<PageStoreDirection/>}/>
          <Route path="/page-store-location" element={<PageStoreLocation/>}/>
          <Route path="/page-testimonial" element={<PageTestimonial/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/cart" element={<ShopingCart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          
       
        </Routes>
      {/* </main> */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
