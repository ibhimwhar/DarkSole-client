import { Link } from "react-router";
import { CheckCircle } from "lucide-react";

const BuyProduct = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
            <div className="text-center max-w-md space-y-6">
                <CheckCircle size={64} className="mx-auto text-green-400" />
                <h1 className="text-3xl font-bold text-green-400">Purchase Successful!</h1>
                <p className="text-gray-300">
                    Thank you for your purchase. Your order is being processed and you'll receive a confirmation email soon.
                </p>

                <Link to="/products">
                    <button className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-lg text-white font-semibold">
                        Back to Home
                    </button>
                </Link>

            </div>
        </section>
    );
};

export default BuyProduct;
