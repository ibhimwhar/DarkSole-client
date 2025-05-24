import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ValueProvider from "./components/Context";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import ProductDetails from "./pages/ProductDetails";
import BuyProduct from "./pages/BuyProduct";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShowButton(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <ValueProvider>
      <div className="bg-gray-950 text-white font-sans">

        {/* Navbar */}
        <Header />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/about" element={<About />} />
          <Route path="/buy-products" element={<BuyProduct />} />
        </Routes>

        {/* Footer */}
        <Footer />

        <button
          onClick={scrollToTop}
          className={`fixed right-5 bottom-5 p-2.5 rounded-full cursor-pointer ring ring-gray-800 bg-gray-900 active:outline-none active:ring-2 active:ring-indigo-500 text-gray-100 transition-transform duration-300 ${showButton ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <ChevronUp className="w-6 h-6" />
        </button>

      </div>
    </ValueProvider>
  );
}

export default App;
