import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import ProductGrid from "./components/ProductGrid";
import PromoBanners from "./components/PromotionalBanner";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Cart from "./components/Cart";
import "./styles/App.css";

function App() {
  const [newProducts, setNewProducts] = useState([]);
  const [specialProducts, setSpecialProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${encodeURIComponent("men's clothing")}`
        );
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        setNewProducts(data.slice(0, 4));
        setSpecialProducts(data.slice(4, 8));
      } catch (err) {
        setError("Error loading products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to add items to the cart (track quantity)
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

  return (
    <div className="app">
      <Navbar cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />

      <main className="main-content">
        <HeroCarousel />

        {loading && <p>Loading products...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && (
          <>
            <section className="products-section">
              <h2>New products</h2>
              <ProductGrid products={newProducts} addToCart={addToCart} />
            </section>

            <section className="products-section">
              <h2>Special products</h2>
              <ProductGrid products={specialProducts} addToCart={addToCart} />
            </section>
          </>
        )}

        <PromoBanners />
        <Testimonials />
      </main>

      <Cart cartItems={cartItems} /> {/* ✅ Ensure Cart receives cartItems */}
      <Footer />
    </div>
  );
}

export default App;
