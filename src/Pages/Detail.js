import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { products } from '../Product'
import ProductCard from '../Component/ProductListing/ProductCard'
import { FaPlus, FaTimes } from 'react-icons/fa';


const Detail = () => {
  const { slug } = useParams()
  const [detail, setDetail] = useState({}) // Use empty object as initial state

  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  // Function to toggle accordion
  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  // Accordion data
  const accordionData = [
    {
      title: "Material Specifications",
      content: [
        "Made from high-quality plywood.",
        "Available in MDF and hardwood options.",
        "Environmentally friendly and sustainable materials.",
      ],
    },
    {
      title: "Finish Options",
      content: [
        "Glossy and matte finishes available.",
        "Wide range of colors and textures.",
        "Scratch-resistant and easy-to-clean surfaces.",
      ],
    },
    {
      title: "Size and Dimensions",
      content: [
        "Customizable cabinet sizes to fit any space.",
        "Standard sizes also available.",
        "Compact designs for small kitchens.",
      ],
    },
    {
      title: "Storage Features",
      content: [
        "Built-in organizers for utensils and spices.",
        "Pull-out shelves for easy access.",
        "Soft-close hinges for noiseless operation.",
      ],
    },
    {
      title: "Durability and Warranty",
      content: [
        "10-year warranty on all cabinets.",
        "Waterproof and termite-resistant materials.",
        "Guaranteed long-lasting performance.",
      ],
    },
    {
      title: "Pricing and Offers",
      content: [
        "Affordable pricing for every budget.",
        "Seasonal discounts and package deals.",
        "Free installation on bulk orders.",
      ],
    },
  ];

  useEffect(() => {
    const findDetail = products.filter(product => product.slug === slug)
    if (findDetail.length > 0) {
      setDetail(findDetail[0])
    } else {
      window.location.href = "/"
    }
  }, [slug])

  const categories = [...new Set(products.map((product) => product.category))]



  return (
    <div className="p-5">
      {/* <h2 className="text-3xl font-bold text-center mb-8">Product Detail</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center p-4">
        <div className="flex justify-center items-center p-4">
  <div className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
    <img
      src={detail.image}
      alt={detail.name}
      className="w-full h-full object-cover"
    />
  </div>
        </div>

</div>

        {/* Product Details */}
        <div className="flex flex-col gap-5  p-4">
          <h1 className="text-4xl font-bold uppercase  p-2">{detail.name}</h1>
          {/* <p className="text-3xl font-bold text-green-500">${detail.price}</p> */}
          <p className="text-lg text-gray-700 leading-relaxed  p-2">{detail.Description}</p>

          {/* Action Buttons or Extra Content */}
          <div className="flex gap-4 mt-4">

           <Link to={"/"}>
           <button className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600">
              Back to Products
            </button>
           </Link>
          </div>
        </div>
      </div>

      {/* Optional: Extra image or content */}
      <div className="mt-8">
        {detail.img && (
          <img
            src={detail.img}
            alt={detail.name}
            className="w-full h-[600px] object-cover rounded-lg"
          />
        )}
      </div>


        {/* Products grouped by category */}
        <div className="flex flex-col lg:flex-row p-6 gap-6">
      {/* Left Sidebar */}
      <div className="lg:w-3/6 w-full bg-gray-50 p-4 rounded-lg shadow-sm">
        {/* Unique Description */}
        <h2 className="text-6xl font-serif text-indigo-600 mb-4 mt-14">
          Stylish Kitchen Cabinets
        </h2>
        <p className="text-gray-600 mb-6 mt-10 text-2xl">
          Discover our elegant collection of kitchen cabinets that combine functionality and style to enhance your space.
          Discover our elegant collection of kitchen cabinets that combine functionality.
        </p>

        {/* Accordion for Specifications */}
        {accordionData.map((item, index) => (
          <div key={index} className="mb-4 mt-10">
            <div
              className="flex justify-between items-center bg-gray-100 p-3 cursor-pointer rounded-lg shadow-sm"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium text-gray-700">{item.title}</span>
              {openAccordionIndex === index ? (
                <FaTimes className="text-indigo-600" />
              ) : (
                <FaPlus className="text-indigo-600" />
              )}
            </div>
            {openAccordionIndex === index && (
              <ul className="bg-white p-4 mt-2 rounded-lg shadow-sm space-y-2">
                {item.content.map((line, i) => (
                  <li key={i} className="text-gray-600">
                    {line}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="lg:w-4/6 w-full">
        <div className="px-6">
          {categories.map((category, index) => (
            <div key={index} className="my-8">
              {/* Category Title */}
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">
                {category}
              </h2>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                      <ProductCard data={product} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  )
}

export default Detail
