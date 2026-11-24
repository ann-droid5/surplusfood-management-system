import {
  CreditCard,
  KeyRound,
  Search,
  ShoppingBasket,
  Store,
} from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Discover surplus food.',
    description:
      'Browse daily discounted surplus listings from participating bakeries, restaurants, cafés, fast-food outlets, and sweet shops near you.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Choose products.',
    description:
      'Review vendor profiles, pickup time slots, available quantities, and select the surplus food items or combo boxes you want.',
    icon: ShoppingBasket,
  },
  {
    number: '03',
    title: 'Pay online.',
    description:
      'Reserve your order securely through online checkout to lock in the discounted price before pickup closes.',
    icon: CreditCard,
  },
  {
    number: '04',
    title: 'Collect using a one-time pickup OTP.',
    description:
      'Visit the food partner during their pickup window and verify your order with a one-time pickup OTP at the counter.',
    icon: KeyRound,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding how-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Simple 4-Step Flow</span>
          <h2 className="section-title">How FreshSave Works</h2>
          <p className="section-subtitle">
            Designed for fast, reliable self-pickup so surplus meals reach
            customers while they are still fresh.
          </p>
        </div>

        <div className="steps-grid">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="step-card">
                <div className="step-top">
                  <div className="step-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="step-number">{step.number}</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="pickup-note-bar">
          <Store size={18} />
          <span>
            Note: FreshSave supports <strong>self-pickup only</strong> directly
            from each participating food business during its listed pickup
            window.
          </span>
        </div>
      </div>
    </section>
  );
}
