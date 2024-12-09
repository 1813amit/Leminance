import React from 'react'

const Boxes = () => {
  return (
    <>
      <section className="py-16 bg-gray-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center">Our Services</h2>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-gray-700 p-6 rounded">
                                <img src="https://placehold.co/300x200" alt="Bespoke Design" className="w-full h-40 object-cover rounded mb-4"/>
                                <h3 className="text-xl font-semibold">Bespoke Design</h3>
                                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="bg-gray-700 p-6 rounded">
                                <img src="https://placehold.co/300x200" alt="Kitchen Cabinets" className="w-full h-40 object-cover rounded mb-4"/>
                                <h3 className="text-xl font-semibold">Kitchen Cabinets</h3>
                                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="bg-gray-700 p-6 rounded">
                                <img src="https://placehold.co/300x200" alt="Modern Appliances" className="w-full h-40 object-cover rounded mb-4"/>
                                <h3 className="text-xl font-semibold">Modern Appliances</h3>
                                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="bg-gray-700 p-6 rounded">
                                <img src="https://placehold.co/300x200" alt="Home Renovations" className="w-full h-40 object-cover rounded mb-4"/>
                                <h3 className="text-xl font-semibold">Home Renovations</h3>
                                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  )
}

export default Boxes
