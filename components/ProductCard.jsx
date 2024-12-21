import React from 'react';
import styles from '../components/ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h2 className={styles.title}>{product.name}</h2>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      <p className={styles.description}>{product.description}</p>
    </div>
  );
}
