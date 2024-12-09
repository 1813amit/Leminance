import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      message:
        "The team at Kitchor did an amazing job with our kitchen remodel. Highly recommend! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, tempore! Odio minima libero hic, aliquid reiciendis incidunt et est aliquam a neque fuga porro quae quia. Alias voluptates vitae ab!",
      name: "John Doe",
      role: "Homeowner",
      image: "https://placehold.co/50x50",
    },
    {
      id: 2,
      message:
        "Professional and efficient. Our new kitchen looks fantastic! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, tempore! Odio minima libero hic, aliquid reiciendis incidunt et est aliquam a neque fuga porro quae quia. Alias voluptates vitae ab!",
      name: "Jane Smith",
      role: "Homeowner",
      image: "https://placehold.co/50x50",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center flex flex-col items-center justify-center px-4">
        {/* Section Heading */}
        <motion.p
          className="text-orange-500 font-medium mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          OUR CLIENT
        </motion.p>
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-12 w-full md:w-3/4 lg:w-4/6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Here's what our satisfied clients are saying
        </motion.h2>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-orange-100 p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-gray-700 mb-6 text-start">{testimonial.message}</h2>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={`Client ${testimonial.id}`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <h2 className="text-gray-600">{testimonial.role}</h2>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
