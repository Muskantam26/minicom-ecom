import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// Layout Components
import { Navbar, Footer } from "./components/layout";

// Pages - New modular pages
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

// Legacy Pages - Can be gradually migrated
import Collection from "./pages/Collection";
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
import Error from "./Page/Error";

// Constants
import { MainContent } from "./constant/MainContent";

/**
 * App Component
 * Main application shell with routing
 */
const App = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(1);
  const [cartTotal, setCartTotal] = useState("$0.00");
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Routes where header/footer should be hidden
  const hideLayoutRoutes = ["/checkout", "/login", "/register"];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  // Check if current route is home page (for transparent navbar)
  const isHomePage = location.pathname === "/";

  // Handlers
  const handleMenuClick = (isOpen) => {
    // Handle menu state - integrate with your MegaMenu component
    console.log("Menu toggled:", isOpen);
  };

  const handleSearch = (query) => {
    // Handle search - integrate with your search logic
    console.log("Search query:", query);
  };

  const handleAccountClick = () => {
    setIsAccountOpen(true);
    // Integrate with AccountSidebar component
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
    // Integrate with CartSidebar component
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-clip">
      {/* Navbar */}
      {!hideLayout && (
        <Navbar
          logoSrc={MainContent.appLogo}
          logoAlt={MainContent.appName}
          transparent={isHomePage}
          cartCount={cartCount}
          wishlistCount={wishlistCount}
          cartTotal={cartTotal}
          onMenuClick={handleMenuClick}
          onCartClick={handleCartClick}
          onAccountClick={handleAccountClick}
          onSearch={handleSearch}
        />
      )}

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          {/* New Modular Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />

          {/* Legacy Routes - Keeping for backward compatibility */}
          <Route path="/collection" element={<Collection />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="/about-Us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/Frequently-Asked-Questions" element={<Faqs />} />
          <Route path="/page-store-direction" element={<PageStoreDirection />} />
          <Route path="/page-store-location" element={<PageStoreLocation />} />
          <Route path="/page-testimonial" element={<PageTestimonial />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<ShopingCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/404" element={<Error />} />
          
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer */}
      {!hideLayout && (
        <Footer
          logoSrc={MainContent.appLogo}
          aboutText="Discover premium furniture designed to transform your living spaces. Quality craftsmanship meets modern design for the modern home."
          socialLinks={[
            {
              label: "Facebook",
              url: "#",
              icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              ),
            },
            {
              label: "Instagram",
              url: "#",
              icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="18" cy="6" r="1" fill="currentColor" />
                </svg>
              ),
            },
            {
              label: "Twitter",
              url: "#",
              icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              ),
            },
          ]}
          newsletterConfig={{
            title: "Newsletter",
            subtitle: "Sign up for exclusive offers",
            placeholder: "Enter your email",
            buttonText: "Subscribe",
          }}
        />
      )}
    </div>
  );
};

export default App;
