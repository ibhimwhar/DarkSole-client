import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create context
export const ValueContext = createContext();

const API_BASE = "http://localhost:5000";

// Context Provider
const ValueProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productParams, setProductParams] = useState(null);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);


    // Fetch all products
    useEffect(() => {
        axios
            .get(`${API_BASE}/products`)
            .then((res) => {
                setProducts(res.data)
                setLoading(false)
            })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    // Fetch cart from backend
    const fetchCart = () => {
        axios
            .get(`${API_BASE}/cart`)
            .then((res) => setCart(res.data))
            .catch((err) => console.error("Error fetching cart:", err));
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const AddToCart = (product) => {
        axios.post(`${API_BASE}/cart/${product.id}`)
            .then(() => fetchCart()) // Refresh cart after adding
            .catch((err) => console.error("Error adding to cart:", err));
    };

    const RemoveFromCart = (product) => {
        axios.delete(`${API_BASE}/cart/${product.id}`)
            .then(() => fetchCart())
            .catch((err) => console.error("Error adding to cart:", err));
    };

    const ClearCart = () => {
        axios.delete(`${API_BASE}/cart`)
            .then(() => fetchCart())
    };


    return (
        <ValueContext.Provider
            value={{
                products,
                productParams,
                setProductParams,
                cart,
                setCart,
                AddToCart,
                fetchCart,
                RemoveFromCart,
                ClearCart,
                loading,
                setLoading
            }}
        >
            {children}
        </ValueContext.Provider>
    );
};

export default ValueProvider;
