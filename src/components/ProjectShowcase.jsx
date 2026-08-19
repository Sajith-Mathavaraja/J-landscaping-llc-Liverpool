import React, { useState } from 'react';
import { Sparkles, Maximize2, X } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Lawn Care',
  'Landscaping',
  'Mulch & Stone',
  'Cleanup',
  'Outdoor Improvements'
];

const SHOWCASE_ITEMS = [
  {
    id: 1,
    title: 'Precision Stripe Mowing & Edging',
    category: 'Lawn Care',
    image: '/images/showcase-lawn.webp',
    location: 'Liverpool, NY'
  },
  {
    id: 2,
    title: 'Estate Paver Patio & Retaining Wall',
    category: 'Outdoor Improvements',
    image: '/images/showcase-hardscape.webp',
    location: 'Liverpool, NY'
  },
  {
    id: 3,
    title: 'Custom Garden Bed Design & Planting',
    category: 'Landscaping',
    image: '/images/showcase-design.webp',
    location: 'Clay, NY'
  },
  {
    id: 4,
    title: 'Fresh Chocolate Mulch & Stone Borders',
    category: 'Mulch & Stone',
    image: '/images/showcase-mulch.webp',
    location: 'Salina, NY'
  },
  {
    id: 5,
    title: 'Complete Seasonal Yard Cleanup',
    category: 'Cleanup',
    image: '/images/showcase-cleanup.webp',
    location: 'Cicero, NY'
  },
  {
    id: 6,
    title: 'Full Sod Installation & Turf Restoration',
    category: 'Lawn Care',
    image: '/images/showcase-sod.webp',
    location: 'Baldwinsville, NY'
  }
];

const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? SHOWCASE_ITEMS
    : SHOWCASE_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-sage font-sans">
              Our Recent Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-forest-deep">
              Outdoor Spaces We're Proud Of
            </h2>
            <p className="text-sm sm:text-base text-charcoal/80 max-w-xl">
              Browse through our recent landscaping, hardscaping, and lawn care projects completed for homeowners in Liverpool and Onondaga County.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all focus-ring ${
                  activeCategory === cat
                    ? 'bg-forest text-white shadow-sm'
                    : 'bg-sand/40 text-forest-deep hover:bg-sand/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group bg-white rounded-2xl overflow-hidden shadow-premium border border-sand/40 cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-sand-light">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.category} project by J Landscaping LLC in ${item.location}`}
                  width="800"
                  height="600"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-forest-deep/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-forest-deep flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-forest-deep text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {item.category}
                </span>
              </div>

              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-forest-deep font-serif group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal/60 mt-0.5">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Preview Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-charcoal/70 text-white flex items-center justify-center hover:bg-charcoal focus-ring"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] bg-charcoal">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex items-center justify-between bg-white border-t border-sand/40">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sage">
                    {selectedImage.category} • {selectedImage.location}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-forest-deep mt-1">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-xs font-bold text-forest hover:text-forest-dark"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectShowcase;
