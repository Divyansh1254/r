"use client";

import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: "Classic Leather Shoes",
      price: "$80.00",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Club C 85 Vintage",
      price: "$75.00",
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Nano X Training Shoes",
      price: "$130.00",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Zig Kinetica Shoes",
      price: "$100.00",
      image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold">REEBOK</span>
              </div>
              <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                <Link href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  Men
                </Link>
                <Link href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  Women
                </Link>
                <Link href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  Kids
                </Link>
                <Link href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  Sale
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-2">
                <Search className="h-6 w-6" />
              </button>
              <button className="p-2">
                <User className="h-6 w-6" />
              </button>
              <button className="p-2">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Men
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Women
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Kids
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Sale
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1400&h=600&fit=crop"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            NEW SEASON ARRIVALS
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Discover the latest collection of athletic footwear and apparel.
            Designed for performance and styled for life.
          </p>
          <div className="mt-10">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover object-center group-hover:opacity-75 transition-opacity"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&h=300&fit=crop"
                alt="Men's"
                className="rounded-lg object-cover w-full h-64"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Men's</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=500&h=300&fit=crop"
                alt="Women's"
                className="rounded-lg object-cover w-full h-64"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Women's</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&h=300&fit=crop"
                alt="Kids'"
                className="rounded-lg object-cover w-full h-64"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Kids'</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Products
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Release Dates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              © 2024 Reebok Clone. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}