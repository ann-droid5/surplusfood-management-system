import { ArrowRight, MapPin, ShoppingBag, Sparkles, Store } from 'lucide-react';
import heroMarketplaceImg from '../assets/hero-marketplace.jpg';

const VENDOR_TYPES = [
  'Bakeries',
  'Restaurants',
  'Cafés',
  'Hotels',
  'Fast-Food Outlets',
  'Sweet Shops',
];

export default function Hero({ onJoinPartner }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div>
          <div className="hero-badge-row">
            <span className="hero-pill">
              <Sparkles size={15} />
              Multi-Vendor Surplus Marketplace
            </span>
            <span className="hero-pill hero-pill-accent">
              <MapPin size={15} />
              Self-Pickup Only
            </span>
          </div>

          <h1 className="hero-title">
            Good Food Deserves a <span>Second Chance.</span>
          </h1>

          <p className="hero-description">
            Discover delicious surplus food from local bakeries, restaurants,
            cafés, fast-food outlets, and sweet shops at special discounted
            prices. Save money and help reduce food waste.
          </p>

          <div className="hero-actions">
            <a href="#explore-food" className="btn btn-primary">
              Explore Surplus Food
              <ArrowRight size={18} />
            </a>
            <button
              type="button"
              className="btn btn-outline"
              onClick={onJoinPartner}
            >
              Join as a Food Partner
            </button>
          </div>

          <div className="hero-vendor-strip">
            <span className="hero-vendor-label">Partner Food Businesses:</span>
            {VENDOR_TYPES.map((type) => (
              <span key={type} className="vendor-type-chip">
                {type}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src={heroMarketplaceImg}
              alt="Fresh surplus food variety from local bakeries, restaurants, cafés, and pizzerias"
            />
          </div>

          <div className="hero-floating-card hero-floating-top">
            <div className="floating-icon-box">
              <Store size={20} />
            </div>
            <div>
              <div className="floating-title">9+ Local Food Vendors</div>
              <div className="floating-sub">Independent partner profiles</div>
            </div>
          </div>

          <div className="hero-floating-card hero-floating-bottom">
            <div className="floating-icon-box">
              <ShoppingBag size={20} />
            </div>
            <div>
              <div className="floating-title">Up to 54% Savings</div>
              <div className="floating-sub">Fresh daily surplus packs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
