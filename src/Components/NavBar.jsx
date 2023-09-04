import React from "react";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Schedules", href: "#", current: false },
  { name: "Membership", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
];

export default function Navbar() {
  return (
    <nav className="bg-white max-w-4xl mx-auto">
      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                  item.current ? "bg-gray-200" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="relative rounded-full text-sm bg-white p-1 text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
            >
              Offers
            </button>
            <button
              type="button"
              className="relative rounded-full  text-sm bg-orange-500 p-1 px-3 text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
            >
              Courses
            </button>
          </div>
        </div>
      </header>
    </nav>
  );
}
