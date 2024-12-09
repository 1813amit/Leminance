import React from 'react'

const Videos = () => {
  return (
    <>
      <section className="py-16 bg-gray-800">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2">
                                <img src="https://placehold.co/600x400" alt="Kitchen Design" className="w-full h-auto rounded"/>
                            </div>
                            <div className="md:w-1/2 md:pl-16 mt-8 md:mt-0">
                                <h2 className="text-3xl font-bold">From design through installation, your safety matters</h2>
                                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                                <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded">Learn More</button>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  )
}

export default Videos
