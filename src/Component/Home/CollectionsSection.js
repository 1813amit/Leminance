import React from "react";
import img1 from "../../assets/Images/cabinate15.avif"
import img2 from "../../assets/Images/cabinate16.jpeg"
import img3 from "../../assets/Images/cabinate17.webp"
import img4 from "../../assets/Images/cabinate18.jpg"

const CollectionsSection = () => {
  const collections = [
    {
      title: "Country Collection",
      img: img1,
      description: "Experience rustic charm with our exclusive designs.",
    },
    {
      title: "Contemporary Collection",
      img: img2,
      description: "Explore the blend of tradition and modernity.",
    },
    {
      title: "Modern Collection",
      img: img3,
      description: "Innovative designs for contemporary living.",
    },
    {
      title: "Urban Collection",
      img: img4,
      description: "Sophisticated styles inspired by city life.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg h-[450px] bg-gray-100 shadow-lg"
          >
            {/* Image */}
            <img
              src={collection.img}
              alt={collection.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Hover Content */}
            <div className="absolute inset-0 bg-gray-600 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between items-center p-6">
              <h3 className="text-3xl font-bold text-white mt-4">
                {collection.title}
              </h3>
              <p className="text-lg text-white mb-4 text-center">
                {collection.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionsSection;
