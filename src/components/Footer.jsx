import {
  Facebook,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';

export default function Footer({ onOpenNotice }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand-logo">
              <span className="brand-mark">
                <Leaf size={20} />
              </span>
              <span className="footer-brand-name">FreshSave</span>
            </div>
            <p className="footer-about">
              FreshSave is a multi-vendor surplus food management and marketplace
              platform connecting customers with local bakeries, restaurants,
              cafés, hotels, fast-food outlets, and sweet shops to reduce food
              waste through self-pickup orders.
            </p>
            <div className="social-links" aria-label="Social media links">
              <a
                href="#home"
                className="social-btn"
                aria-label="FreshSave on Instagram"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenNotice('social');
                }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="#home"
                className="social-btn"
                aria-label="FreshSave on Facebook"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenNotice('social');
                }}
              >
                <Facebook size={18} />
              </a>
              <a
                href="#home"
                className="social-btn"
                aria-label="FreshSave on Twitter"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenNotice('social');
                }}
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#explore-food">Explore Food</a>
              </li>
              <li>
                <a href="#how-it-works">How It Works</a>
              </li>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#food-partners">Become a Food Partner</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-list">
              <li className="footer-contact-item">
                <Mail size={16} />
                <span>hello@freshsave-demo.local</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} />
                <span>+91 98765 43210 (Demo)</span>
              </li>
              <li className="footer-contact-item">
                <MapPin size={16} />
                <span>Campus Innovation Hub, BCA Final Year</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Legal &amp; Project Info</h3>
            <ul className="footer-list">
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => onOpenNotice('privacy')}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => onOpenNotice('roles')}
                >
                  Planned User Roles
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => onOpenNotice('partner')}
                >
                  Food Partner Onboarding
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} FreshSave – Surplus Food
            Management &amp; Marketplace System.
          </span>
          <span>
            Phase 1 Frontend Prototype • Demonstration Sample Data Only
          </span>
        </div>
      </div>
    </footer>
  );
}
