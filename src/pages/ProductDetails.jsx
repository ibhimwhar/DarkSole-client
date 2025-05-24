
import { Link, useParams } from "react-router"
import { ValueContext } from "../components/Context"
import { useContext, useEffect } from "react"
import axios from "axios";

const ProductDetails = () => {
    const { id } = useParams();
    const { setProductParams, productParams, AddToCart, cart } = useContext(ValueContext);

    useEffect(() => {
        if (id) {
            axios.get(`https://darksole-server.onrender.com/products/${id}`)
                .then((res) => setProductParams(res.data))
                .catch((err) => console.error("Error fetching product:", err));
        }
    }, [id, setProductParams]);

    if (!productParams) {
        return <div className="p-5 space-y-5 tracking-wider flex flex-col justify-center text-center min-h-screen text-white">
            <h2 className="text-4xl font-semibold">No Item Found</h2>

            <Link
                to={'/'}
                className="text-indigo-600 hover:underline underline-offset-2"
            >
                CLICK BACK HOME
            </Link>

        </div>
    }

    const insideCart = cart.some((item) => item.id === id)

    return (
        <div className="p-5 min-h-screen text-white">
            <div className="my-10 max-w-2xl mx-auto">
                <img
                    src={productParams.image}
                    alt={productParams.name}
                    className="rounded mb-4 w-full h-84 object-cover"
                />
            </div>

            <div className="md:mt-16">
                <h4 className="text-2xl font-semibold mb-2 text-indigo-600">{productParams.name}</h4>
                <p className="text-gray-300 mb-2">{productParams.description}</p>
                <p className="text-white font-bold mb-4">Price: ${productParams.price?.toFixed(2)}</p>
                <button
                    onClick={() => AddToCart(productParams)} disabled={inCart}
                    className={`${insideCart
                        ? "bg-gray-900 opacity-90 cursor-not-allowed"
                        : "bg-indigo-600 cursor-pointer hover:bg-indigo-700"
                        } px-4 py-2 rounded text-sm font-medium text-white`}
                >
                    {insideCart ? "In Cart" : "Add to Cart"}
                </button>
            </div>
        </div>
    )
}

export default ProductDetails