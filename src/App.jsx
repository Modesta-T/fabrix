import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import ProductGrid from "./components/ProductGrid";
import PromoBanners from "./components/PromotionalBanner";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Deals from "./pages/Deals";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import "./styles/App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAdmin(!!user);
    });
    return () => unsubscribe();
  }, []);

  // Function to add items to cart
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/dashboard" element={isAdmin ? <AdminDashboard /> : <AdminLogin />} />
        </Routes>

        <HeroCarousel />
        {/* <ProductGrid addToCart={addToCart} /> */}
        <PromoBanners />
        <Testimonials />
      </main>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Footer />
    </Router>
  );
}

export default App;
