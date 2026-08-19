import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const NAV_ITEMS = [
  { label: 'Home', targetId: 'home', num: '01' },
  { label: 'Services', targetId: 'services', num: '02' },
  { label: 'About', targetId: 'about', num: '03' },
  { label: 'Why Us', targetId: 'why-us', num: '04' },
  { label: 'Reviews', targetId: 'reviews', num: '05' },
  { label: 'Contact', targetId: 'contact', num: '06' },
];

const Header = ({ onOpenEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.targetId));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].targetId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        mobileMenuOpen
          ? 'bg-forest-deep text-white shadow-2xl py-2.5 border-b border-white/10'
          : isScrolled
            ? 'bg-white/97 backdrop-blur-md shadow-md py-2 border-b border-gray-100'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo / Brand Name */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group focus-ring rounded-lg text-left shrink-0"
            aria-label="J Landscaping LLC Home"
          >
            <img
              src={getAssetUrl('/images/logo.webp')}
              alt="J Landscaping LLC Logo"
              width="40"
              height="40"
              className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-xl group-hover:scale-105 transition-transform drop-shadow-lg shrink-0"
            />
            <span className={`text-base sm:text-2xl font-black tracking-tight font-sans whitespace-nowrap transition-colors ${
              mobileMenuOpen ? 'text-white' : isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              J Landscaping <span className="text-lime-500">LLC</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.targetId;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.targetId)}
                  className={`text-sm font-semibold transition-colors focus-ring ${
                    isActive
                      ? 'text-lime-500 font-bold border-b-2 border-lime-500 pb-0.5'
                      : isScrolled
                        ? 'text-gray-700 hover:text-lime-600'
                        : 'text-white/90 hover:text-lime-400'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenEstimate}
              className="bg-lime-500 hover:bg-lime-400 text-black font-extrabold px-6 py-2.5 rounded-full shadow-lg hover:shadow-lime-500/30 transition-all text-sm flex items-center gap-2 focus-ring transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button + Quick CTA */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenEstimate}
              className="bg-lime-500 hover:bg-lime-400 text-black text-xs font-black px-3.5 py-1.5 rounded-full shadow-md whitespace-nowrap"
            >
              Free Quote
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 sm:p-2 rounded-xl focus-ring transition-colors ${
                mobileMenuOpen
                  ? 'bg-white/10 text-lime-400 border border-white/20'
                  : isScrolled
                    ? 'text-gray-800 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-lime-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Tight Dropdown Menu Directly Under Navbar */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-forest-deep/98 backdrop-blur-xl shadow-2xl rounded-b-3xl border-b border-x border-white/15 p-3 sm:p-4 animate-fadeIn">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.targetId;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.targetId)}
                  className={`px-3.5 py-2.5 rounded-xl text-sm sm:text-base font-bold flex items-center justify-between transition-all text-left ${
                    isActive
                      ? 'bg-lime-500 text-black shadow-md'
                      : 'bg-white/5 text-white hover:bg-white/10 hover:text-lime-400 border border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-black/75' : 'text-lime-400'}`}>
                      {item.num}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-black' : 'text-white/60'}`} />
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
