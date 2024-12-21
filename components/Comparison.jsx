import { useState } from "react";
import './Comparison.module.css'; // Link to external stylesheet

export default function Comparison({ products }) {
  // Ensure products is an array before using it
  if (!Array.isArray(products) || products.length === 0) {
    return <div className="no-products-message">No products available for comparison.</div>;
  }

  const [selected, setSelected] = useState([]);

  const toggleSelection = (product) => {
    setSelected((prev) =>
      prev.includes(product)
        ? prev.filter((item) => item !== product)
        : [...prev, product]
    );
  };

  return (
    <div className="comparison-container">
      <h2 className="heading">Compare Products</h2>
      
      {/* Product Selection */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <input
              type="checkbox"
              onChange={() => toggleSelection(product)}
              checked={selected.includes(product)} // Ensures checkbox reflects selection state
              className="select-checkbox"
            />
            <div className="product-info">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <span className="product-name">{product.name}</span>
                <span className="product-price">{product.price} ₹</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Products */}
      {selected.length > 0 && (
        <div className="selected-products">
          <h3>Selected Products:</h3>
          <div className="selected-items">
            {selected.map((product) => (
              <div key={product.id} className="selected-item">
                <h4>{product.name}</h4>
                <p>{product.price} ₹</p>
                <img src={product.image} alt={product.name} className="selected-item-image" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
