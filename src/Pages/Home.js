import React, { useState } from 'react'
import { products } from '../Product'
import ProductCard from '../Component/ProductListing/ProductCard'
import Button from '../Component/ProductListing/Button'

const Home = () => {
  const [items, setItems] = useState(products)
  const menuItem = [...new Set(products.map((val) => val.category))]

  const filterItems = (cat) => {
    const newItems = products.filter((newVal) => newVal.category === cat)
    setItems(newItems)
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      {/* Page Header */}
      {/* <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Product Listing
      </h1> */}

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Button menuItem={menuItem} filterItems={filterItems} setItems={setItems} />
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {items.map((product, key) => (
          <ProductCard key={key} data={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
