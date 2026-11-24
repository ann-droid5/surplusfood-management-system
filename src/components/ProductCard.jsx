import { Clock, Eye, Package, Store } from 'lucide-react';

export default function ProductCard({ product, onViewDetails }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        <span className="discount-badge">{product.discountPercentage}% OFF</span>
        <span className="category-badge">{product.category}</span>
        <span className="pickup-badge-overlay">
          <Clock size={12} />
          Pickup: {product.pickupWindow}
        </span>
      </div>

      <div className="product-body">
        <div className="vendor-meta-row">
          <span className="vendor-name">
            <Store size={14} />
            {product.vendorName}
          </span>
          <span className="vendor-type-pill">{product.vendorType}</span>
        </div>

        <h3 className="product-title">{product.name}</h3>
        <p className="product-summary">{product.description}</p>

        <div className="product-info-footer">
          <div className="price-block">
            <span className="price-discounted">₹{product.discountedPrice}</span>
            <span className="price-original">₹{product.originalPrice}</span>
          </div>
          <span className="qty-pill">
            <Package size={13} />
            {product.availableQuantity}
          </span>
        </div>

        <button
          type="button"
          className="btn btn-outline product-btn"
          onClick={() => onViewDetails(product)}
        >
          <Eye size={16} />
          View Details
        </button>
      </div>
    </article>
  );
}
