import React from "react";

function NavBar() {
    return (
        <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold text-gray-800">
                        FinanceFlow
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            Dashboard
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            Transactions
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            Budgeting
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            Reports
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Sign Up
                        </button>
                        <button className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Login
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 12h18M3 6h18M3 18h18"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
