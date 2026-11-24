import { useState } from 'react';
import { Info, UtensilsCrossed } from 'lucide-react';
import { FOOD_CATEGORIES, SAMPLE_PRODUCTS } from '../data/products.js';
import ProductCard from './ProductCard.jsx';

export default function FeaturedProducts({ onViewDetails }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? SAMPLE_PRODUCTS
      : SAMPLE_PRODUCTS.filter((item) => item.category === selectedCategory);

  return (
    <section id="explore-food" className="section-padding featured-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <UtensilsCrossed size={14} />
            Multi-Vendor Marketplace
          </span>
          <h2 className="section-title">Discover Today&apos;s Surplus</h2>
          <p className="section-subtitle">
            Browse fresh, quality surplus food listed directly by independent
            local food vendors across bakeries, restaurants, cafés, fast-food
            outlets, and sweet shops.
          </p>
        </div>

        <div className="demo-banner" role="note">
          <div className="demo-banner-text">
            <Info size={18} />
            <span>
              <strong>Demonstration Sample Data:</strong> The listings below
              illustrate multi-vendor surplus food offers for this Phase 1
              frontend prototype.
            </span>
          </div>
          <span className="demo-tag">Prototype Preview</span>
        </div>

        <div
          className="category-filter-bar"
          role="tablist"
          aria-label="Filter surplus food by vendor category"
        >
          {FOOD_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selectedCategory === category}
              className={`filter-pill ${
                selectedCategory === category ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
