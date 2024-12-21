import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';
import Comparison from '../components/Comparison';
import productsData from '../data/products.json';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const [products, setProducts] = useState(productsData);  // State to hold filtered products
  const [selectedCategory, setSelectedCategory] = useState('');  // Filter by category
  const [sortOrder, setSortOrder] = useState('');  // Sorting by price or rating

  // Filter products by category
  const filterProducts = (category) => {
    setSelectedCategory(category);
    setProducts(
      category ? productsData.filter((product) => product.category === category) : productsData
    );
  };

  // Sort products based on selected criteria (price or rating)
  const sortProducts = (order) => {
    setSortOrder(order);
    const sorted = [...products].sort((a, b) => {
      if (order === 'price') {
        return a.price - b.price;
      } else if (order === 'rating') {
        return b.rating - a.rating;  // Assuming rating property exists
      }
      return 0;
    });
    setProducts(sorted);
  };

  return (
    <div className="home-container">
      {/* Pass products to Carousel */}
      <Carousel items={products} />

      <h1 className="product-heading">Our Products</h1>

      {/* Filter & Sort Options */}
      <div className="filter-sort-container">
        <select
          onChange={(e) => filterProducts(e.target.value)}
          value={selectedCategory}
          className="filter-sort-dropdown"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
          {/* Add more categories */}
        </select>

        <select
          onChange={(e) => sortProducts(e.target.value)}
          value={sortOrder}
          className="filter-sort-dropdown"
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Display product cards */}
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pass products to Comparison component */}
      <Comparison products={products} />
    </div>
  );
}
