import { Link } from 'react-router'
import Main_Image from '../assets/xavier-teo-SxAXphIPWeg-unsplash.jpg'


const Home = () => {
    return (
        <section className="px-6 py-20 text-center bg-gradient-to-b from-gray-900 to-gray-950">

            <div className="max-w-4xl mx-auto">

                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
                    Step into <span className="text-indigo-500">DarkSole</span>
                </h2>

                <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-8">
                    Premium footwear crafted for comfort, performance, and style.
                </p>

                <Link to="/products">
                    <button className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-lg text-white font-semibold">
                        Shop Shoes
                    </button>
                </Link>

                <div className="mx-auto my-8 w-full max-w-md rounded-lg shadow-lg overflow-hidden">
                    <img
                        src={Main_Image}
                        alt="Featured Shoe"
                        className="rounded-lg transform transition-transform duration-300 hover:scale-105"
                    />
                </div>

                <p>
                    At DarkSole, we believe that great shoes do more than just look good, they support your lifestyle, wherever it takes you. Whether you're heading to the office, hitting the trail, or exploring the city, our collection is crafted to deliver all-day comfort and long-lasting durability.
                    <br /><br />
                    Each pair is made with premium materials and precise attention to detail, ensuring you feel as good as you look. From minimal classics to bold performance styles, DarkSole is where form meets function in footwear.
                    <br /><br />
                    Join the movement. Walk your journey in DarkSole.
                </p>

            </div>

        </section>
    )
}

export default Home
