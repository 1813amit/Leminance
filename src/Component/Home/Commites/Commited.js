import React from 'react'

const Commited = () => {
  return (
    <>
       <section className="py-16 text-center">
                    <h2 className="text-3xl font-bold">Committed to delivering top-tier customer experiences</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center">
                            <i className="fas fa-tools text-4xl mb-4"></i>
                            <h3 className="text-xl font-semibold">Fast Delivery</h3>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <i className="fas fa-shipping-fast text-4xl mb-4"></i>
                            <h3 className="text-xl font-semibold">Free Shipping</h3>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <i className="fas fa-thumbs-up text-4xl mb-4"></i>
                            <h3 className="text-xl font-semibold">Safe Payment</h3>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <i className="fas fa-cogs text-4xl mb-4"></i>
                            <h3 className="text-xl font-semibold">Custom Options</h3>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </section>
    </>
  )
}

export default Commited
