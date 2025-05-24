import { useContext } from "react"
import { ValueContext } from "../components/Context"
import { Link, useNavigate } from "react-router"

const Cart = () => {
    const { cart, RemoveFromCart, ClearCart, products } = useContext(ValueContext)

    const Total = cart.reduce((acc, i) => acc + i.price, 0)

    const navigate = useNavigate();

    const Images = products.map((item) => item.image)

    return (
        <section className="min-h-screen p-5 bg-gray-900">
            {cart.length === 0 ? (
                <div className="min-h-screen flex flex-col justify-center gap-10 text-center bg-gray-900">
                    <h2 className="text-3xl font-bold text-indigo-400">Your Cart</h2>
                    <p className="text-gray-400">Your shoe rack is waiting. Start adding your favorites!</p>
                    <Link to="/products">
                        <button className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-lg text-white font-semibold">
                            Shop Shoes
                        </button>
                    </Link>
                </div>
            )
                : (
                    <div className="grid gap-10">
                        {cart.map((items, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-800 p-3 md:p-5 md:flex items-center gap-5"
                            >
                                <img
                                    src={items.image}
                                    className="rounded w-full md:w-[30%] h-48 object-cover"
                                />

                                <div className="mt-5 grid gap-5 w-full">
                                    <h1 className="text-3xl">{items.name}</h1>
                                    <h3 className="font-semibold text-right">${items.price.toFixed(2)} USD</h3>
                                    <button
                                        onClick={() => RemoveFromCart(items)}
                                        className="transition-all hover:bg-red-500 active:bg-red-500 hover:ring-0 active:ring-0 ring cursor-pointer ring-gray-800 w-full md:w-fit p-2 px-20 text-sm rounded-3xl">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="mt-6 md:flex justify-between items-start">

                            <Link to="/products">
                                <div className="my-5 transition-all text-gray-700 hover:text-white w-fit flex items-center gap-1">
                                    <div className="flex -space-x-8">
                                        {Images.slice(0, 5).map((items, i) => (
                                            <img
                                                key={i}
                                                src={items}
                                                className="w-10 h-10 rounded-md object-cover"
                                            />
                                        ))}

                                    </div>

                                    <p className="text-sm">Add More</p>
                                </div>
                            </Link>

                            <div className="flex flex-col justify-end items-end gap-5">
                                <h3 className="font-semibold"><span className="font-bold text-xl mr-2">Total:</span> ${Total.toFixed(2)} USD</h3>
                                <button
                                    onClick={() => {
                                        ClearCart()
                                        navigate("/buy-products");
                                    }}

                                    className="leading-6 tracking-widest font-bold bg-white active:bg-transparent active:text-white active:ring ring-gray-800 text-black transition-all cursor-pointer w-full md:w-fit p-2 px-20 text-sm rounded-3xl">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

        </section>
    )
}

export default Cart
