import { useEffect, useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenNotice }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Explore Food', href: '#explore-food' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About Us', href: '#about-us' },
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="brand-logo" aria-label="FreshSave Home">
          <span className="brand-mark">
            <Leaf size={22} strokeWidth={2.2} />
          </span>
          <span className="brand-text-group">
            <span className="brand-name">FreshSave</span>
            <span className="brand-tagline">Surplus Food Marketplace</span>
          </span>
        </a>

        <nav aria-label="Primary Navigation">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="btn btn-outline nav-btn-login"
            onClick={() => onOpenNotice('login')}
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-primary nav-btn-signup"
            onClick={() => onOpenNotice('signup')}
          >
            Sign Up
          </button>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleNavClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-nav-actions">
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              setMobileOpen(false);
              onOpenNotice('login');
            }}
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setMobileOpen(false);
              onOpenNotice('signup');
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
