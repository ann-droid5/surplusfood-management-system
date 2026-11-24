import { useEffect } from 'react';
import { Clock, MapPin, Package, ShieldCheck, Store, X } from 'lucide-react';

const NOTICE_CONTENT = {
  login: {
    badge: 'Phase 1 Prototype Notice',
    title: 'Login — Coming Soon',
    message:
      'Customer, Food Partner, and Administrator authentication will be implemented in the next phase with Django & MySQL integration.',
  },
  signup: {
    badge: 'Phase 1 Prototype Notice',
    title: 'Sign Up — Coming Soon',
    message:
      'Account registration for Customers and Food Businesses is scheduled for Phase 2 development.',
  },
  partner: {
    badge: 'Vendor Onboarding',
    title: 'Registration Coming Soon',
    message:
      'Food Vendor onboarding for bakeries, restaurants, cafés, hotels, fast-food outlets, and sweet shops is coming soon. Each vendor will receive an individual business profile to manage daily surplus listings.',
  },
  privacy: {
    badge: 'Privacy & Prototype Policy',
    title: 'Privacy Policy (Demo Prototype)',
    message:
      'This Phase 1 frontend prototype runs locally in your browser using static demonstration data. No personal information, payment details, or authentication credentials are collected or stored.',
  },
  roles: {
    badge: 'System Architecture',
    title: 'Planned User Roles',
    message:
      'FreshSave is designed around three user roles: (1) Customer — discovers and reserves surplus food for self-pickup; (2) Food Partner — manages their individual business profile and surplus food listings; (3) Administrator — oversees vendors, listings, and platform quality.',
  },
  social: {
    badge: 'Social Channels',
    title: 'Social Links Coming Soon',
    message:
      'Official FreshSave community channels will be linked once the platform launches beyond the Phase 1 prototype.',
  },
};

export default function NoticeModal({ modalState, onClose }) {
  useEffect(() => {
    if (!modalState) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalState, onClose]);

  if (!modalState) return null;

  if (modalState.type === 'product' && modalState.product) {
    const p = modalState.product;
    return (
      <div
        className="modal-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-heading"
        onClick={onClose}
      >
        <div className="modal-card" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3 id="modal-heading" className="modal-title">
              {p.name}
            </h3>
            <button
              type="button"
              className="modal-close"
              aria-label="Close modal"
              onClick={onClose}
            >
              <X size={18} />
            </button>
          </div>
          <div className="modal-body">
            <img
              src={p.image}
              alt={p.name}
              className="modal-product-img"
            />
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
              {p.description}
            </p>

            <div className="modal-vendor-box">
              <div className="modal-vendor-box-title">
                Food Vendor Profile • {p.vendorType}
              </div>
              <div
                style={{
                  fontWeight: 700,
                  color: 'var(--color-dark-brown)',
                  marginBottom: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Store size={15} />
                {p.vendorName}
              </div>
              <p
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--text-muted)',
                  marginBottom: '10px',
                }}
              >
                {p.vendorBio}
              </p>
              <div className="modal-meta-grid">
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <MapPin size={14} /> {p.vendorLocation}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Clock size={14} /> {p.pickupWindow}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Package size={14} /> {p.availableQuantity}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <ShieldCheck size={14} /> Self-Pickup Only
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                flexWrap: 'wrap',
              }}
            >
              <div className="price-block">
                <span className="price-discounted">₹{p.discountedPrice}</span>
                <span className="price-original">₹{p.originalPrice}</span>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--color-caramel-dark)',
                  }}
                >
                  ({p.discountPercentage}% OFF)
                </span>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClose}
              >
                Ordering Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const content = NOTICE_CONTENT[modalState.type] || NOTICE_CONTENT.login;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notice-heading"
      onClick={onClose}
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 id="notice-heading" className="modal-title">
            {content.title}
          </h3>
          <button
            type="button"
            className="modal-close"
            aria-label="Close modal"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-notice-pill">{content.badge}</div>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.96rem',
              lineHeight: 1.7,
              marginBottom: '22px',
            }}
          >
            {content.message}
          </p>
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
