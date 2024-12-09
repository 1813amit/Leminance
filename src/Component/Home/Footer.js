import React, { useEffect } from "react";
import { gsap } from "gsap";
import leminenece from "../../assets/Images/WhatsApp Image 2024-11-26 at 08.10.55.jpeg"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Import icons

const Footer = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      ".footer-heading",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );

    gsap.fromTo(
      ".footer-item",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, stagger: 0.2 }
    );
  }, []);

  return (
    <footer className="bg-white text-black w-full overflow-hidden">
      <div className="container mx-auto px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 flex flex-col items-center justify-center">
          <p className="text-orange-500 font-medium mb-4 footer-heading">
            YOU DREAM IT. WE DESIGN IT
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balck w-2/3 footer-heading">
            We can build you the kitchen of your dreams
          </h2>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition footer-heading">
            SCHEDULE A CHAT
          </button>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left bg-orange-100 p-8 rounded-lg">
          {/* KITCHOR Info */}
          <div className="footer-item">
            <h3 className="text-lg font-bold mb-4 text-orange-500 w-2/3">
              <img src={leminenece} alt="" />
            </h3>
            <p className="text-gray-400">
              Leminance
              <br />
              418 Rt 23, Frinklin, NJ,07416
            </p>
            <p className="text-gray-400 mt-4">
              Phone: (123) 456-7890
              <br />
              Email: info@email.com
            </p>
          </div>

          {/* About Us */}
          <div className="footer-item">
            <h3 className="text-lg font-bold mb-4 text-orange-500">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="footer-item">
            <h3 className="text-lg font-bold mb-4 text-orange-500">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Kitchen Cabinets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Counter Tops
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Bathroom Vanities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Vanity Tops
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-item">
            <h3 className="text-lg font-bold mb-4 text-orange-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Design & Quote
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Trade Partner
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="footer-item">
            <h3 className="text-lg font-bold mb-4 text-orange-500">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
