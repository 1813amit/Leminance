import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../assets/Images/cabinate18.jpg"; // Replace with your actual image path
import img2 from "../../assets/Images/cabinate15.avif"; // Replace with your actual image path

gsap.registerPlugin(ScrollTrigger);

const SafetySection = () => {
  useEffect(() => {
    // Animation for text
    gsap.fromTo(
      ".safety-text",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".safety-section",
          start: "top 70%",
          end: "top 50%",
          toggleActions: "play none none none", // Play animation once
        },
      }
    );

    // Animation for image
    gsap.fromTo(
      ".safety-img",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".safety-section",
          start: "top 70%",
          end: "top 50%",
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  }, []);

  return (
    <section
      className="safety-section w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${img2})`, // Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px", // Adjust the height as needed
      }}
    >
      <div className="container mx-auto w-full flex items-center justify-center py-12 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="safety-text p-8 bg-opacity-80 rounded-lg shadow-lg flex flex-col items-start justify-center text-center md:text-left">
            <h2 className="text-5xl font-bold mb-4 text-gray-800 flex flex-col items-start justify-center">
              <span className="capitalize font-medium text-sm text-orange-600">
                PROMO VIDEOS
              </span>
              Ensuring a safe experience from design to installation
            </h2>
            <p className="text-gray-800 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur nobis
              numquam iste! Quam consequuntur harum quia! Excepturi, dolore rem ipsam, eum
              similique voluptatum soluta est explicabo, officiis quos sit?
            </p>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-500 transition duration-300">
              Find Out More
            </button>
          </div>

          {/* Image Section */}
          <div className="safety-img flex justify-center items-center">
            <img
              src={img1}
              alt="Safe experience from design to installation"
              className="h-auto rounded-lg shadow-lg w-4/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
