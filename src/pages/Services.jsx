import React from 'react';
import {
  Scissors,
  Flower2,
  Layers,
  Trees,
  Sun,
  Sprout,
  Shovel,
  Sparkles,
  CheckCircle,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import SEO from '../components/SEO';

const DETAILED_SERVICES = [
  {
    id: 'lawn-care',
    icon: Scissors,
    name: 'Lawn Care & Maintenance',
    description: 'Keep your Liverpool lawn healthy, thick, and neatly manicured with our weekly or bi-weekly mowing service.',
    benefits: [
      'Stripe mowing at optimal turf height',
      'String trimming along fences, flower beds & trees',
      'Razor-sharp concrete edging on driveways & walkways',
      'Complete hard surface blow-down before leaving site'
    ],
    examples: 'Residential lawns, corner lots, HOA common areas, small commercial grounds in Liverpool NY.'
  },
  {
    id: 'landscape-design',
    icon: Flower2,
    name: 'Landscape Design & Installation',
    description: 'Transform tired outdoor areas into vibrant, structured flower beds and garden features tailored to Central NY soil.',
    benefits: [
      'Custom bed shaping & soil amendment',
      'Selection of climate-hearty perennials & shrubs',
      'Professional planting with proper root depth',
      'Long-term layout advice for low maintenance'
    ],
    examples: 'Front entry upgrades, back yard garden bed installations, foundation planting renovations.'
  },
  {
    id: 'mulch-stone',
    icon: Layers,
    name: 'Mulch & Decorative Stone',
    description: 'Protect root systems, retain moisture, and suppress weeds while giving your property an instant polished look.',
    benefits: [
      'High-grade triple-shredded dark brown or black mulch',
      'Decorative river stone & gravel border options',
      'Deep spade edging around bed perimeter',
      'Uniform depth application (2-3 inches)'
    ],
    examples: 'Spring mulch refresh, replacing organic mulch with decorative stone, bed edging definition.'
  },
  {
    id: 'shrub-plant',
    icon: Trees,
    name: 'Shrub & Plant Care',
    description: 'Regular pruning and seasonal hedge trimming to maintain crisp natural shapes and healthy growth.',
    benefits: [
      'Pruning of evergreen hedges & boxwoods',
      'Deadwood removal & shrub thinning',
      'Ornamental shrub shaping',
      'Clean removal of all cut trimmings'
    ],
    examples: 'Overgrown hedge trimming, annual boxwood shaping, seasonal shrub maintenance.'
  },
  {
    id: 'spring-fall-cleanup',
    icon: Sun,
    name: 'Spring & Fall Cleanup',
    description: 'Thorough leaf pickup, bed blowouts, and seasonal yard clearing to prepare turf for summer growth or winter dormancy.',
    benefits: [
      'Deep leaf raking & high-powered blowing',
      'Perennial cut-backs & dead plant removal',
      'Stick, acorn & storm debris cleanup',
      'Full leaf vacuum haul-away'
    ],
    examples: 'April lawn re-opening, October/November leaf removal in woodsy Liverpool neighborhoods.'
  },
  {
    id: 'sod-installation',
    icon: Sprout,
    name: 'Sod & Lawn Installation',
    description: 'Instant green grass solutions for damaged lawns, new construction, or yards struggling with bare dirt.',
    benefits: [
      'Old lawn stripping & soil tilling',
      'Laser-level finish grading',
      'Freshly cut Kentucky Bluegrass sod rolls',
      'Step-by-step watering instructions'
    ],
    examples: 'Bare backyard sodding, post-construction lawn installation, dead patch replacement.'
  },
  {
    id: 'hardscaping',
    icon: Shovel,
    name: 'Hardscaping',
    description: 'Durable stone walkways, paver patios, and retaining walls designed for beauty and structural longevity.',
    benefits: [
      'Concrete paver walkways & entry paths',
      'Small retaining walls & stone bed borders',
      'Proper gravel & sand base compaction',
      'Polymeric sand joint sealing'
    ],
    examples: 'Front walkway replacement, garden retaining walls, fire pit patio pads.'
  },
  {
    id: 'property-cleanup',
    icon: Sparkles,
    name: 'Property Cleanup',
    description: 'Complete outdoor clearing for overgrown, neglected properties or before putting a home on the market.',
    benefits: [
      'Overgrowth brush clearing',
      'Weed bed reclamation',
      'Trash & outdoor debris removal',
      'Immediate boost to property curb appeal'
    ],
    examples: 'Pre-sale real estate cleanups, rental property overhauls, storm damage cleanup.'
  }
];

const Services = ({ navigate, onOpenEstimate }) => {
  return (
    <>
      <SEO
        title="Landscaping Services | J Landscaping LLC | Liverpool, NY"
        description="Explore complete landscaping services in Liverpool, NY: lawn care, mowing, landscape design, mulch, shrub pruning, spring/fall cleanup, sod, and hardscaping."
        path="/services"
      />

      {/* HERO SECTION */}
      <section className="pt-28 pb-16 bg-forest-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold font-sans">
            Our Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white leading-tight">
            Complete Landscaping Directory
          </h1>
          <p className="text-base sm:text-lg text-sand/90 font-sans max-w-2xl mx-auto">
            Professional outdoor maintenance and landscape services tailored for Liverpool properties. Click any service to request a custom free quote.
          </p>
        </div>
      </section>

      {/* SERVICES DIRECTORY GRID */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-12">
            {DETAILED_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-premium border border-sand/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-sage/40 transition-colors"
                >
                  {/* Left Info */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-sage/15 border border-sage/30 text-forest flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-sage uppercase tracking-wider">
                          Service 0{index + 1}
                        </span>
                        <h2 className="text-2xl font-bold font-serif text-forest-deep">
                          {service.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-charcoal/80 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-forest-deep font-sans">
                        Key Benefits &amp; Process:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.benefits.map((b, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-charcoal/80 bg-offwhite/60 p-2 rounded-lg border border-sand/30">
                            <CheckCircle className="w-4 h-4 text-forest shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Action & Examples */}
                  <div className="lg:col-span-5 bg-sand-light/50 p-6 rounded-2xl border border-sand/40 space-y-4 flex flex-col justify-between h-full">
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-forest-deep block font-sans">
                        Common Project Examples:
                      </span>
                      <p className="text-xs text-charcoal/70 italic leading-relaxed">
                        {service.examples}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-sand/40 space-y-2">
                      <button
                        onClick={onOpenEstimate}
                        className="w-full bg-forest hover:bg-forest-dark text-white font-bold py-3 px-5 rounded-xl shadow-organic text-xs flex items-center justify-center gap-2 transition-all focus-ring"
                      >
                        <span>Get Free Estimate For {service.name}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* NEED SOMETHING DIFFERENT? */}
      <section className="py-16 bg-sand-light border-y border-sand/40 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-sage/20 text-forest flex items-center justify-center mx-auto">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-forest-deep">
            Need Something Different?
          </h2>
          <p className="text-sm sm:text-base text-charcoal/80">
            Have a unique landscape challenge or custom maintenance requirement in Liverpool, NY? We're happy to consult on custom property projects.
          </p>
          <button
            onClick={onOpenEstimate}
            className="bg-gold hover:bg-gold-light text-forest-deep font-bold px-8 py-3.5 rounded-full shadow-md text-sm transition-all focus-ring"
          >
            Request Custom Estimate
          </button>
        </div>
      </section>
    </>
  );
};

export default Services;
