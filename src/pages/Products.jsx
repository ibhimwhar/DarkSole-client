import { useContext } from "react"
import { ValueContext } from "../components/Context"
import { Link } from "react-router"
import { Loader2 } from "lucide-react"

const Products = () => {
    const { products, AddToCart, cart, loading } = useContext(ValueContext)

    return (
        <section className="px-3 md:px-6 py-16 min-h-screen bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold mb-12 text-center text-white">Our Collection</h3>

                {loading ? (
                    <div className="flex justify-center items-center h-96">
                        <Loader2 size={48} className="animate-spin text-indigo-500" />
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                        {products.map((product) => {
                            const inCart = cart.some((item) => item.id === product.id)
                            return (
                                <div
                                    key={product.id}
                                    className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition"
                                >
                                    <img
                                        src={product.image}
                                        alt={`${product.name} image`}
                                        className="rounded mb-4 w-full h-48 object-cover"
                                    />

                                    <h4 className="text-2xl font-semibold mb-2 text-indigo-600">{product.name}</h4>
                                    <p className="text-gray-300 mb-2">
                                        {product.description.slice(0, 50)} . . . .
                                    </p>
                                    <p className="text-white font-bold mb-4">${product.price.toFixed(2)}</p>

                                    <div className="flex justify-between items-center">
                                        <Link to={`/products/${product.id}`}>
                                            <button className="text-sm text-indigo-600 hover:underline transition cursor-pointer underline-offset-2">
                                                View
                                            </button>
                                        </Link>

                                        <button
                                            onClick={() => AddToCart(product)}
                                            disabled={inCart}
                                            className={`${inCart
                                                    ? "bg-gray-900 opacity-90 cursor-not-allowed"
                                                    : "bg-indigo-600 cursor-pointer hover:bg-indigo-700"
                                                } px-4 py-2 rounded text-sm font-medium text-white`}
                                        >
                                            {inCart ? "In Cart" : "Add to Cart"}
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Products
