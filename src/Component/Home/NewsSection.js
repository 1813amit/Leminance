import React from "react";

const NewsSection = () => {
  const news = [
    {
      title: "Kitchen Trends 2024",
      description: "Discover the latest trends in kitchen design.",
      img: "https://placehold.co/400x300",
    },
    {
      title: "How to Maximize Space",
      description: "Tips and tricks for small kitchens.",
      img: "https://placehold.co/400x300",
    },
    {
      title: "Sustainable Materials",
      description: "Eco-friendly options for your kitchen.",
      img: "https://placehold.co/400x300",
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded">
              <img src={item.img} alt={item.title} className="rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
