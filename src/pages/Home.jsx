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
  MapPin,
  CheckCircle2,
  Star,
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  HeartHandshake
} from 'lucide-react';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ProjectShowcase from '../components/ProjectShowcase';
import ProcessTimeline from '../components/ProcessTimeline';

const SERVICES_DATA = [
  {
    id: 'lawn-care',
    icon: Scissors,
    title: 'Lawn Care & Maintenance',
    description: 'Mowing, trimming, edging and routine lawn maintenance to keep your grass healthy, sharp, and vibrant.',
    benefits: ['Weekly & Bi-Weekly Mowing', 'Precision Edging', 'Grass Clipping Cleanup']
  },
  {
    id: 'landscape-design',
    icon: Flower2,
    title: 'Landscape Design & Installation',
    description: 'Transform outdoor spaces with thoughtful landscape design, plant selection, and professional installation.',
    benefits: ['Custom Bed Layouts', 'Perennial & Shrub Planting', 'Soil Preparation']
  },
  {
    id: 'mulch-stone',
    icon: Layers,
    title: 'Mulch & Decorative Stone',
    description: 'Refresh landscape beds with quality triple-shredded dark mulch and decorative river stone for plant protection.',
    benefits: ['Weed Suppression', 'Moisture Retention', 'Clean Edge Definition']
  },
  {
    id: 'shrub-plant',
    icon: Trees,
    title: 'Shrub & Plant Care',
    description: 'Pruning, trimming and seasonal plant maintenance to foster healthy growth and crisp hedge aesthetics.',
    benefits: ['Hedge Trimming', 'Ornamental Tree Care', 'Seasonal Pruning']
  },
  {
    id: 'spring-fall-cleanup',
    icon: Sun,
    title: 'Spring & Fall Cleanup',
    description: 'Remove leaves, fallen branches and seasonal debris so your lawn stays healthy year-round in Liverpool, NY.',
    benefits: ['Leaf Removal & Composting', 'Bed Blowout', 'Gutter Debris Cleaning']
  },
  {
    id: 'sod-installation',
    icon: Sprout,
    title: 'Sod & Lawn Installation',
    description: 'Create or restore a healthy, instant, attractive lawn with premium Kentucky Bluegrass sod installation.',
    benefits: ['Soil Grading', 'Instant Green Turf', 'Establishment Guidance']
  },
  {
    id: 'hardscaping',
    icon: Shovel,
    title: 'Hardscaping',
    description: 'Walkways, patios, borders and outdoor living improvements crafted with durable pavers and stone.',
    benefits: ['Stone Walkways', 'Paver Patios', 'Retaining Walls']
  },
  {
    id: 'property-cleanup',
    icon: Sparkles,
    title: 'Property Cleanup',
    description: 'General outdoor property cleanup and overhaul for neglected yards, overgrown beds, or storm debris.',
    benefits: ['Brush Removal', 'Overgrowth Clearing', 'Haul-Away Service']
  }
];

const WHY_US_BENEFITS = [
  {
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Deep understanding of Liverpool NY soil, climate conditions, and local turf species.'
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: 'Dependable scheduling, clear communication, and consistent weekly property maintenance.'
  },
  {
    icon: Award,
    title: 'Quality Workmanship',
    description: 'Meticulous attention to detail from initial edging down to final driveway blow-down.'
  },
  {
    icon: ShieldCheck,
    title: 'Complete Property Care',
    description: 'All your lawn care, mulch, pruning, and landscape cleanup needs under one trusted provider.'
  },
  {
    icon: HeartHandshake,
    title: 'Free Estimates',
    description: 'Transparent, upfront pricing with no hidden charges or obligation.'
  }
];

const REVIEWS_PREVIEW = [
  {
    id: 1,
    name: 'Michael T.',
    location: 'Liverpool, NY',
    rating: 5,
    service: 'Lawn Mowing & Mulch Installation',
    review: 'J Landscaping LLC transformed our front yard! The stripe mowing is immaculate and the fresh mulch beds look like a magazine cover. Punctual, polite, and very fair pricing.'
  },
  {
    id: 2,
    name: 'Amanda R.',
    location: 'Clay, NY',
    rating: 5,
    service: 'Spring Cleanup & Shrub Trimming',
    review: 'They cleared out years of accumulated leaves and overgrown bushes in one afternoon. Our yard hasn’t looked this clean in years. Highly recommend J Landscaping!'
  },
  {
    id: 3,
    name: 'David K.',
    location: 'Liverpool, NY',
    rating: 5,
    service: 'Landscape Bed Design',
    review: 'Professional team from start to finish. They helped select the right plants for our soil type and installed a beautiful stone border. True craftsmen.'
  }
];

const Home = ({ navigate, onOpenEstimate }) => {
  return (
    <>
      <SEO
        title="J Landscaping LLC | Landscaping & Lawn Care in Liverpool, NY"
        description="Professional landscaping, lawn care, hardscaping, sod, mulch, and seasonal cleanups in Liverpool, NY and Onondaga County. Get a free estimate today!"
        path="/"
      />

      {/* HERO SECTION MATCHING LAWNPRO CONCEPT DESIGN EXACTLY */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-36 text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Full Sunset Background Image */}
        <img
          src="/images/hero-landscape.webp"
          alt="Golden sunset lawn mowing and professional property landscaping by J Landscaping LLC in Liverpool NY"
          width="1400"
          height="788"
          fetchpriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Gradient Overlay for Crisp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl space-y-6">
            
            {/* LawnPro Style Typography */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black font-sans text-white leading-none tracking-tight">
              Perfect <br />
              <span className="text-lime-400 font-black">Lawns</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-white/90 font-sans leading-relaxed">
              Professional landscaping and lawn care services for homes and properties throughout Liverpool, NY and surrounding communities.
            </p>

            {/* LawnPro Style Pill Button */}
            <div className="pt-2">
              <button
                onClick={onOpenEstimate}
                className="bg-lime-500 hover:bg-lime-400 text-black font-extrabold px-8 py-4 rounded-full shadow-2xl hover:shadow-lime-500/40 transition-all text-base inline-flex items-center gap-3 focus-ring transform hover:-translate-y-0.5"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Social Proof Rating Badges */}
            <div className="pt-8 flex items-center gap-4 text-xs font-semibold text-white/90">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold border-2 border-black">M</div>
                <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center font-bold border-2 border-black">A</div>
                <div className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-bold border-2 border-black">D</div>
                <div className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center font-bold border-2 border-black">J</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-white/80 mt-0.5 block">Trusted by 500+ Liverpool Homeowners</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-sage font-sans">
              What We Do Best
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-forest-deep">
              Complete Care for Your Outdoor Space
            </h2>
            <p className="text-sm sm:text-base text-charcoal/80">
              From weekly lawn mowing to full garden bed transformations, we offer comprehensive landscaping solutions tailored for Liverpool properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((srv) => (
              <ServiceCard
                key={srv.id}
                icon={srv.icon}
                title={srv.title}
                description={srv.description}
                benefits={srv.benefits}
                onLearnMore={() => navigate('/services')}
                onSelectService={onOpenEstimate}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 bg-forest text-white font-bold px-8 py-3.5 rounded-full hover:bg-forest-dark transition-all text-sm shadow-organic focus-ring"
            >
              View Full Services Directory
              <ArrowRight className="w-4 h-4 text-lime-400" />
            </button>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US PREVIEW */}
      <section className="py-20 bg-sand-light/50 border-y border-sand/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-sage font-sans">
              The J Landscaping Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-forest-deep">
              Why Liverpool Property Owners Choose J Landscaping LLC
            </h2>
            <p className="text-sm sm:text-base text-charcoal/80">
              We treat every lawn and garden like our own property — with reliability, respect, and meticulous care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHY_US_BENEFITS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-premium border border-sand/40 text-center space-y-3 hover:border-sage/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-sage/15 border border-sage/30 text-forest flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-serif text-forest-deep">{item.title}</h3>
                  <p className="text-xs text-charcoal/70 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/why-us')}
              className="text-xs font-bold text-forest hover:text-forest-dark underline underline-offset-4 focus-ring"
            >
              Learn more about our standards and local commitments →
            </button>
          </div>

        </div>
      </section>

      {/* BEFORE / AFTER SECTION */}
      <BeforeAfterSlider />

      {/* PROJECT SHOWCASE */}
      <ProjectShowcase />

      {/* PROCESS */}
      <ProcessTimeline />

      {/* REVIEWS PREVIEW */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-sage font-sans">
              Client Satisfaction
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-forest-deep">
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-base text-charcoal/80">
              Read honest feedback from homeowners and property managers in Liverpool, NY.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS_PREVIEW.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 shadow-premium border border-sand/40 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="text-sm text-charcoal/80 italic leading-relaxed">
                    "{rev.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-sand/30 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold font-serif text-forest-deep">{rev.name}</h4>
                    <span className="text-xs text-charcoal/60">{rev.location}</span>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 bg-sand/30 rounded-md text-forest">
                    {rev.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/reviews')}
              className="inline-flex items-center gap-2 bg-sand/50 text-forest-deep font-bold px-6 py-3 rounded-full hover:bg-gold transition-colors text-sm focus-ring"
            >
              View All Reviews
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* LOCAL SERVICE AREA */}
      <section className="py-16 bg-forest-deep text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gold font-sans">
                Local Onondaga County Coverage
              </span>
              <h2 className="text-3xl font-bold font-serif text-white">
                Serving Liverpool, NY &amp; Surrounding Communities
              </h2>
              <p className="text-sm text-sand/80 leading-relaxed">
                Based right here in Liverpool, NY 13088, J Landscaping LLC delivers dependable lawn maintenance and outdoor transformations throughout Onondaga County.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-sand">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <span>Liverpool, NY</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                  <MapPin className="w-4 h-4 text-sage shrink-0" />
                  <span>Clay, NY</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                  <MapPin className="w-4 h-4 text-sage shrink-0" />
                  <span>Salina, NY</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                  <MapPin className="w-4 h-4 text-sage shrink-0" />
                  <span>Cicero, NY</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                  <MapPin className="w-4 h-4 text-sage shrink-0" />
                  <span>Baldwinsville, NY</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                  <MapPin className="w-4 h-4 text-sage shrink-0" />
                  <span>North Syracuse</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-white">Need Service in Liverpool?</h3>
                <p className="text-xs text-sand/80 max-w-md mx-auto">
                  We schedule rapid on-site property assessments throughout Liverpool zip code 13088 and nearby areas.
                </p>
                <button
                  onClick={onOpenEstimate}
                  className="bg-lime-500 text-black font-extrabold text-xs px-6 py-3 rounded-full hover:bg-lime-400 transition-colors"
                >
                  Check Service For My Address
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-sand-light border-t border-sand/40 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-sage font-sans">
            Start Your Transformation
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-forest-deep leading-tight">
            Ready to Transform Your Property?
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl mx-auto font-sans">
            Let's create an outdoor space you can be proud of. Contact J Landscaping LLC today for a fast, hassle-free estimate.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEstimate}
              className="w-full sm:w-auto bg-forest hover:bg-forest-dark text-white font-bold px-8 py-4 rounded-full shadow-organic hover:shadow-organic-hover transition-all text-base flex items-center justify-center gap-2 focus-ring"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-5 h-5 text-lime-400" />
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-white hover:bg-sand/30 text-forest-deep font-semibold px-8 py-4 rounded-full border border-sand-dark/60 transition-all text-base focus-ring"
            >
              Contact J Landscaping LLC
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
