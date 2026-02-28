import React from "react";
import Hero from "./pages/Hero";
import { Route, Routes } from "react-router-dom";
import Collection from "./pages/Collection";
import Header1 from "./component/Header1";
import Footer from "./component/Footer";
import Error from "./Page/Error";
import Products from "./pages/Products";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-clip">
      <Header1 />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/collection" element={<Collection />} />
           <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="*" element={<Hero />} />
          <Route path="/404" element={<Error/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
