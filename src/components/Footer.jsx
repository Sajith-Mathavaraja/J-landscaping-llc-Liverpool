import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

const Footer = ({ onOpenEstimate, onOpenTerms, onOpenPrivacy }) => {
  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-forest-deep text-white border-t border-forest-light/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.webp"
                alt="J Landscaping LLC Logo"
                width="44"
                height="44"
                className="w-11 h-11 object-contain rounded-xl drop-shadow-md"
              />
              <span className="text-xl font-bold font-serif text-white">
                J Landscaping <span className="text-lime-400">LLC</span>
              </span>
            </div>
            <p className="text-sand/80 text-sm leading-relaxed">
              Premier landscaping, lawn care, hardscaping, and seasonal property maintenance company based in Liverpool, NY. Dedicated to quality, reliability, and beautiful outdoor spaces.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenEstimate}
                className="bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 shadow-md transition-all transform hover:-translate-y-0.5"
              >
                Request Free Estimate
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-base font-bold text-lime-400 uppercase tracking-wider mb-4 font-serif">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', targetId: 'home' },
                { label: 'Services Directory', targetId: 'services' },
                { label: 'About Us', targetId: 'about' },
                { label: 'Why Choose Us', targetId: 'why-us' },
                { label: 'Customer Reviews', targetId: 'reviews' },
                { label: 'Contact Us', targetId: 'contact' },
              ].map((link) => (
                <li key={link.targetId}>
                  <button
                    onClick={() => scrollToSection(link.targetId)}
                    className="text-sand/80 hover:text-white transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sage group-hover:bg-lime-400 transition-colors"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Offered */}
          <div>
            <h4 className="text-base font-bold text-lime-400 uppercase tracking-wider mb-4 font-serif">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-sand/80">
              <li>• Lawn Care &amp; Maintenance</li>
              <li>• Landscape Design &amp; Installation</li>
              <li>• Mulch &amp; Decorative Stone</li>
              <li>• Shrub &amp; Plant Pruning</li>
              <li>• Spring &amp; Fall Cleanups</li>
              <li>• Sod &amp; Lawn Installation</li>
              <li>• Walkways &amp; Hardscaping</li>
              <li>• Outdoor Property Cleanup</li>
            </ul>
          </div>

          {/* Col 4: Local Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-lime-400 uppercase tracking-wider mb-4 font-serif">
              Liverpool Location
            </h4>
            <div className="flex items-start gap-3 text-sm text-sand/90">
              <MapPin className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <span>106 Kings Park Dr, Liverpool, NY 13090</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-sand/90">
              <Clock className="w-5 h-5 text-sage shrink-0" />
              <span>Monday – Saturday: 7:00 AM – 6:00 PM</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-sand/90">
              <Phone className="w-5 h-5 text-sage shrink-0" />
              <a href="tel:7745045296" className="hover:text-lime-400 transition-colors font-semibold">
                (774) 504-5296
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-sand/90">
              <Mail className="w-5 h-5 text-sage shrink-0" />
              <a href="mailto:albany@kdtreeservices.com" className="hover:text-lime-400 transition-colors break-all">
                albany@kdtreeservices.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Legal Links */}
        <div className="pt-8 border-t border-forest-light/40 flex flex-col md:flex-row items-center justify-between text-xs text-sand/70 gap-4">
          <p>© 2026 J Landscaping LLC. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenPrivacy}
              className="text-sand/80 hover:text-lime-400 underline transition-colors focus-ring"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="text-sand/80 hover:text-lime-400 underline transition-colors focus-ring"
            >
              Terms &amp; Conditions
            </button>
          </div>

          <div className="flex items-center gap-3 text-sand/60">
            <span>Liverpool, NY Landscaping</span>
            <span>•</span>
            <span>Reliable • Quality • Local</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
