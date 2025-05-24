import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Home, Instagram, Menu, ShoppingBasket, ShoppingCart, User, X, CloudAlert, ListTodo } from 'lucide-react'
import { ValueContext } from './Context'

const Header = () => {
    const { cart } = useContext(ValueContext)

    const [scrollEffect, setScrollEffect] = useState(false)

    const [menuOpenClose, setMenuOpenClose] = useState(false)
    const dropMenuRef = useRef(null)

    const path = useLocation().pathname

    useEffect(() => {
        const handleScrollEffect = () => {
            if (window.scrollY > 20) {
                setScrollEffect(true);
            } else {
                setScrollEffect(false);
            }
        };

        window.addEventListener('scroll', handleScrollEffect);
        return () => window.removeEventListener('scroll', handleScrollEffect);
    }, []);

    const menuLinks = [
        { name: 'Home', link: '/', icon: <Home size={18} /> },
        { name: 'Shoes', link: '/products', icon: <ShoppingBasket size={18} /> },
        { name: 'About', link: '/about', icon: <User size={18} /> },
        { name: 'Cart', link: '/cart', icon: <ShoppingCart size={18} /> },
    ];

    useEffect(() => {

        const HandleToggleMenu = (event) => {
            if (!dropMenuRef.current && !dropMenuRef.current.contains(event.target.value)) {
                setMenuOpenClose(true)
            } else {
                setMenuOpenClose(false)
            }
        }

        document.addEventListener('mousedown', HandleToggleMenu)

        return () => {
            document.removeEventListener('mousedown', HandleToggleMenu)
        }

    }, [])

    return (
        <header className={`${scrollEffect ? 'translate-y-0' : '-translate-y-full'} fixed z-50 transition-transform w-full border-b border-gray-800 bg-gray-900`}>
            <div className="px-5 py-4 max-w-7xl mx-auto flex items-center justify-between">

                <h1 className="text-2xl font-bold text-white tracking-wide">DarkSole</h1>

                <nav className="hidden sm:flex gap-8 md:hidden">
                    {menuLinks.map((links, i) => (
                        <Link
                            key={i}
                            to={links.link}
                            className={`${path === links.link && 'text-indigo-700'} hover:text-indigo-400 transition`}
                        >
                            <div className='relative'>
                                {links.icon}
                                {i === 3 && <span className="absolute bg-indigo-900 text-white flex justify-center items-center rounded-full w-4 -top-2 -right-2 text-[10px]">
                                    {cart.length}
                                </span>
                                }
                            </div>
                        </Link>
                    ))}
                </nav>

                <nav className="space-x-6 hidden md:flex">
                    {menuLinks.map((links, i) => (
                        <Link
                            key={i}
                            to={links.link}
                            className={`${path === links.link && 'text-indigo-700'} hover:text-indigo-400 transition`}
                        >
                            <div className='relative'>
                                {links.name}
                                {i === 3 && <span className="absolute bg-indigo-900 text-white flex justify-center items-center rounded-full w-4 -top-2 -right-2 text-[10px]">
                                    {cart.length}
                                </span>
                                }
                            </div>
                        </Link>
                    ))}
                </nav>

                <button
                    onClick={() => setMenuOpenClose(!menuOpenClose)}
                    className={`relative sm:hidden p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                >
                    {menuOpenClose ?
                        <X className="h-6 w-6" />
                        :
                        cart.length === 0 ?
                            <Menu className="h-6 w-6" />
                            :
                            <ListTodo className="h-6 w-6" />
                    }
                </button>

            </div>

            <div ref={dropMenuRef} className={`${menuOpenClose ? 'translate-x-0' : '-translate-x-full'} md:hidden min-h-screen transition-transform absolute z-50 border-r border-gray-800 bg-gray-900`}>
                <nav className='grid gap-3 px-6 pr-10 py-5'>
                    {menuLinks.map((links, i) => (
                        <Link
                            onClick={() => setMenuOpenClose(false)}
                            key={i}
                            to={links.link}
                            className={`
                        py-2 pr-10 flex items-center gap-3
                        ${path === links.link && 'text-indigo-700'}
                        hover:text-indigo-400 transition`}
                        >
                            <div className='relative'>
                                {links.icon}
                                {i === 3 && <span className="absolute bg-indigo-900 text-white flex justify-center items-center rounded-full w-4 -top-2 -right-2 text-[10px]">
                                    {cart.length}
                                </span>
                                }
                            </div>
                            {links.name}
                        </Link>
                    ))}
                </nav>

                <a
                    href="https://www.instagram.com/viralface_1"
                    className='text-[11px] border-t py-3 p-6 border-gray-800 flex items-center gap-1'
                >
                    <Instagram size={15} />
                    Follow us
                </a>
            </div>

        </header>
    )
}

export default Header
