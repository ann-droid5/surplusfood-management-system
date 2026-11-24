import { BadgePercent, HeartHandshake, Leaf } from 'lucide-react';

const BENEFITS = [
  {
    title: 'Affordable Food',
    description:
      'Enjoy high-quality meals, baked goods, café items, and sweets at 40–60% below regular menu prices without compromising on freshness.',
    icon: BadgePercent,
  },
  {
    title: 'Reduce Food Waste',
    description:
      'Every rescued order prevents perfectly edible daily surplus food from ending up in landfills and lowers environmental impact.',
    icon: Leaf,
  },
  {
    title: 'Support Local Food Businesses',
    description:
      'Help neighborhood bakeries, restaurants, cafés, hotels, and sweet shops recover value on unsold inventory while reaching new local customers.',
    icon: HeartHandshake,
  },
];

export default function WhyFreshSave() {
  return (
    <section id="about-us" className="section-padding why-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Purpose</span>
          <h2 className="section-title">Why FreshSave?</h2>
          <p className="section-subtitle">
            FreshSave bridges the gap between everyday surplus kitchen stock and
            value-conscious communities across all types of food businesses.
          </p>
        </div>

        <div className="features-grid">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="feature-card">
                <div className="feature-icon">
                  <Icon size={26} />
                </div>
                <h3 className="feature-title">{benefit.title}</h3>
                <p className="feature-desc">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
