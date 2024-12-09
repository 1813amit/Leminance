import React from "react";
import { motion } from "framer-motion";
import imgss from "../../assets/Images/WhatsApp Image 2024-11-26 at 08.10.55.jpeg"

const Header = () => {
  return (
    <motion.header
      className="bg-white shadow-md py-4"
      initial={{ y: -100, opacity: 0 }} // Start above the screen
      animate={{ y: 0, opacity: 1 }} // Move to the final position
      transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.5 }} // Smooth spring effect
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        
        <motion.div
          className="text-2xl font-bold text-orange-500"
          initial={{ x: -100, opacity: 0 }} // Start from the left
          animate={{ x: 0, opacity: 1 }} // Move to the center
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }} // Delayed for better sequencing
        >
          <img className="h-10" src={imgss} alt="" />
        </motion.div>

        {/* Navigation */}
        <motion.nav
          className="hidden md:flex space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="/Layout" className="text-gray-700 hover:text-orange-500">
            Product
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Contact
          </a>
        </motion.nav>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={{ x: 100, opacity: 0 }} // Start from the right
          animate={{ x: 0, opacity: 1 }} // Move to the center
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }} // Delayed for sequencing
        >
          <button className="text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
              />
            </svg>
          </button>
        </motion.div>

        {/* Button */}
        <motion.button
          className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          initial={{ x: 100, opacity: 0 }} // Start from the right
          animate={{ x: 0, opacity: 1 }} // Move to the center
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }} // Delayed for sequencing
        >
          Get a Quote
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
