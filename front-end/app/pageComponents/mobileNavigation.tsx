"use client";
import { useState } from "react";

export default function MobileNavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="lg:hidden w-screen border">
            <nav className="lg:hidden md:block  bg-gray-800 p-4 w-screem">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-white text-2xl font-bold">RC</div>

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Menu Items */}
                <div
                    className={`${isMenuOpen ? "block" : "hidden"
                        } absolute top-12 -ml-4 bg-black/70 w-screen mt-4 h-screen space-y-2 transition-all duration-300 z-50`}
                >
                    <div className="text-center mt-[10%] space-y-10">
                        <a
                            href="#"
                            className="block text-white  hover:bg-gray-700 px-2 py-1 rounded"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="block text-white hover:bg-gray-700 px-2 py-1 rounded"
                        >
                            Cars
                        </a>
                        <a
                            href="#"
                            className="block text-white hover:bg-gray-700 px-2 py-1 rounded"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="block text-white hover:bg-gray-700 px-2 py-1 rounded"
                        >
                            Rent Car
                        </a>
                        <a
                            href="#"
                            className="block text-white hover:bg-gray-700 px-2 py-1 rounded"
                        >
                            Lease car
                        </a>
                        <a
                            href="#"
                            className="block text-white hover:bg-gray-700 px-2 py-1 rounded"
                        >
                            View Categories
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}