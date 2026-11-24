import { ArrowRight, CheckCircle2, Store } from 'lucide-react';

const PARTNER_HIGHLIGHTS = [
  'Open to bakeries, restaurants, cafés, hotels, fast-food outlets, and sweet shops',
  'Dedicated business profile for every registered food vendor',
  'Manage your own daily surplus food listings, prices, and pickup slots',
  'Zero delivery logistics — customers collect directly from your counter',
];

export default function FoodPartnerSection({ onBecomePartner }) {
  return (
    <section id="food-partners" className="section-padding partner-section">
      <div className="container">
        <div className="partner-card">
          <div>
            <span className="partner-eyebrow">
              <Store size={14} />
              For Food Businesses &amp; Vendors
            </span>
            <h2 className="partner-heading">
              Have Surplus Food? Turn It Into an Opportunity.
            </h2>
            <p className="partner-desc">
              Join FreshSave and connect with customers looking for affordable
              surplus food. Whether you run a bakery, restaurant, café, hotel,
              fast-food outlet, or sweet shop, create your vendor profile and
              recover value from daily unsold dishes.
            </p>
            <button
              type="button"
              className="btn btn-white"
              onClick={onBecomePartner}
            >
              Become a Food Partner
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="partner-highlights">
            <div className="partner-highlights-title">
              Multi-Vendor Partner Benefits
            </div>
            <ul className="partner-checklist">
              {PARTNER_HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} className="partner-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
