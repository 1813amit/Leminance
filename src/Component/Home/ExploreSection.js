import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import img1 from "../../assets/Images/cabinate15.avif";
import img2 from "../../assets/Images/cabinate16.jpeg";
import img3 from "../../assets/Images/cabinate17.webp";
import img4 from "../../assets/Images/cabinate18.jpg";
import img5 from "../../assets/Images/cabinate19.avif";
import img6 from "../../assets/Images/cabinate20.webp";

gsap.registerPlugin(ScrollTrigger);

const ExploreSection = () => {
  useEffect(() => {
    // GSAP ScrollTrigger animation for the design cards
    gsap.fromTo(
      ".design-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".explore-section",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const designs = [
    { title: "Modern Kitchen", img: img1 },
    { title: "Rustic Charm", img: img2 },
    { title: "Elegant Design", img: img3 },
    { title: "Urban Minimal", img: img4 },
    { title: "Contemporary Space", img: img5 },
    { title: "Classic Aesthetic", img: img6 },
  ];

  return (
    <section className="explore-section py-16 bg-white">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        <h1 className="text-orange-600 font-medium mb-4">OUR PROJECT</h1>
        <h2 className="text-5xl font-bold text-center mb-6 text-black">
          Explore Our Kitchen Designs
        </h2>
        <p className="mb-12 w-full sm:w-2/3 text-center text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quod
          velit vitae iste obcaecati laboriosam eos iusto libero, facilis corrupti.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-2/3">
          {designs.map((design, index) => (
            <motion.div
              key={index}
              className="design-card relative rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <img
                src={design.img}
                alt={design.title}
                className="rounded-lg w-full h-72 object-cover"
              />

              {/* Overlay for title */}
              <div className="absolute inset-0 bg-gray-600 bg-opacity-75 opacity-0 flex items-center justify-center transition-opacity duration-300 hover:opacity-100 rounded-lg">
                <h3 className="text-white text-xl font-bold">{design.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
