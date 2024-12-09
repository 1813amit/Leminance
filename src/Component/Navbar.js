import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full px-6 md:px-20 py-4 md:py-8 flex justify-between items-center">
      <div className="logo text-lg font-bold">lkasdlkf</div>
      <div className="links hidden md:flex gap-6 md:gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a key={index} className="text-sm md:text-md capitalize hover:text-green-500 transition">
            {item}
          </a>
        ))}
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-white focus:outline-none" aria-label="Toggle Menu">
          ☰
        </button>
      </div>
    </div>
  );
};

export default Navbar;
