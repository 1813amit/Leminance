import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler, faTools, faShippingFast, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    // Animation for service cards
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // Trigger animation when the card is near the viewport
            end: "top 50%",
            toggleActions: "play none none none", // Ensures animation plays only once
          },
        }
      );
    });
  }, []);

  return (
    <section className=" py-20 bg-white services-section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-orange-600">
          Extremely High Standard of Customer Satisfaction
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="service-card p-6 bg-orange-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FontAwesomeIcon
              icon={faPencilRuler}
              className="text-5xl text-orange-600 mb-4 transition-transform duration-300 hover:scale-110 hover:opacity-90"
            />
            <h3 className="text-2xl font-bold text-gray-800">Custom Design</h3>
            <p className="text-gray-600 mt-2">Tailored to your needs</p>
          </div>
          <div className="service-card p-6 bg-orange-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FontAwesomeIcon
              icon={faTools}
              className="text-5xl text-orange-600 mb-4 transition-transform duration-300 hover:scale-110 hover:opacity-90"
            />
            <h3 className="text-2xl font-bold text-gray-800">Quality Materials</h3>
            <p className="text-gray-600 mt-2">Only the best</p>
          </div>
          <div className="service-card p-6 bg-orange-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FontAwesomeIcon
              icon={faShippingFast}
              className="text-5xl text-orange-600 mb-4 transition-transform duration-300 hover:scale-110 hover:opacity-90"
            />
            <h3 className="text-2xl font-bold text-gray-800">Fast Installation</h3>
            <p className="text-gray-600 mt-2">Quick and efficient</p>
          </div>
          <div className="service-card p-6 bg-orange-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FontAwesomeIcon
              icon={faHeadset}
              className="text-5xl text-orange-600 mb-4 transition-transform duration-300 hover:scale-110 hover:opacity-90"
            />
            <h3 className="text-2xl font-bold text-gray-800">Support</h3>
            <p className="text-gray-600 mt-2">24/7 Assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
