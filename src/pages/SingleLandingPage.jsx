import React, { useState, useEffect } from 'react';
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
  HeartHandshake,
  CheckCircle,
  HelpCircle,
  Eye,
  Phone,
  Mail,
  Send,
  Map,
  Quote
} from 'lucide-react';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ProcessTimeline from '../components/ProcessTimeline';
import { getAssetUrl } from '../utils/assets';

const SERVICES_DATA = [
  {
    id: 'lawn-care',
    icon: Scissors,
    image: getAssetUrl('/images/services/lawn-care.webp'),
    title: 'Lawn Care & Maintenance',
    description: 'Mowing, trimming, edging and routine lawn maintenance to keep your grass healthy, sharp, and vibrant.',
    benefits: ['Weekly & Bi-Weekly Mowing', 'Precision Edging', 'Grass Clipping Cleanup']
  },
  {
    id: 'landscape-design',
    icon: Flower2,
    image: getAssetUrl('/images/services/landscape-design.webp'),
    title: 'Landscape Design & Installation',
    description: 'Transform outdoor spaces with thoughtful landscape design, plant selection, and professional installation.',
    benefits: ['Custom Bed Layouts', 'Perennial & Shrub Planting', 'Soil Preparation']
  },
  {
    id: 'mulch-stone',
    icon: Layers,
    image: getAssetUrl('/images/services/mulch-stone.webp'),
    title: 'Mulch & Decorative Stone',
    description: 'Refresh landscape beds with quality triple-shredded dark mulch and decorative river stone for plant protection.',
    benefits: ['Weed Suppression', 'Moisture Retention', 'Clean Edge Definition']
  },
  {
    id: 'shrub-plant',
    icon: Trees,
    image: getAssetUrl('/images/services/shrub-plant.webp'),
    title: 'Shrub & Plant Care',
    description: 'Pruning, trimming and seasonal plant maintenance to foster healthy growth and crisp hedge aesthetics.',
    benefits: ['Hedge Trimming', 'Ornamental Tree Care', 'Seasonal Pruning']
  },
  {
    id: 'spring-fall-cleanup',
    icon: Sun,
    image: getAssetUrl('/images/services/spring-fall-cleanup.webp'),
    title: 'Spring & Fall Cleanup',
    description: 'Remove leaves, fallen branches and seasonal debris so your lawn stays healthy year-round in Liverpool, NY.',
    benefits: ['Leaf Removal & Composting', 'Bed Blowout', 'Gutter Debris Cleaning']
  },
  {
    id: 'sod-installation',
    icon: Sprout,
    image: getAssetUrl('/images/services/sod-installation.webp'),
    title: 'Sod & Lawn Installation',
    description: 'Create or restore a healthy, instant, attractive lawn with premium Kentucky Bluegrass sod installation.',
    benefits: ['Soil Grading', 'Instant Green Turf', 'Establishment Guidance']
  },
  {
    id: 'hardscaping',
    icon: Shovel,
    image: getAssetUrl('/images/services/hardscaping.webp'),
    title: 'Hardscaping',
    description: 'Walkways, patios, borders and outdoor living improvements crafted with durable pavers and stone.',
    benefits: ['Stone Walkways', 'Paver Patios', 'Retaining Walls']
  },
  {
    id: 'property-cleanup',
    icon: Sparkles,
    image: getAssetUrl('/images/services/property-cleanup.webp'),
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
  },
  {
    id: 4,
    name: 'Jennifer S.',
    location: 'Salina, NY',
    rating: 5,
    service: 'Sod Installation & Lawn Repair',
    review: 'We had dead patches throughout our backyard after tree removal. J Landscaping removed the old dirt, regraded, and laid fresh sod. Two weeks later it’s thick and vibrant green!'
  },
  {
    id: 5,
    name: 'Robert & Ellen M.',
    location: 'Cicero, NY',
    rating: 5,
    service: 'Weekly Lawn Care Maintenance',
    review: 'Consistent every single week. They edge the driveway razor-sharp, trim around all flower beds, and always blow off the porch and driveway before leaving. 10/10 service.'
  },
  {
    id: 6,
    name: 'Brian H.',
    location: 'Baldwinsville, NY',
    rating: 5,
    service: 'Fall Cleanup & Hardscape Border',
    review: 'Called them for a late fall leaf blowout and stone border repair. They arrived on time, gave an honest quote, and finished the job cleanly. Will be using them every year.'
  }
];

const CORE_VALUES = [
  {
    icon: Award,
    title: 'Quality',
    description: 'We hold ourselves to high workmanship standards on every mowing, mulching, pruning, or installation job.'
  },
  {
    icon: ShieldCheck,
    title: 'Reliability',
    description: 'Dependable scheduling and prompt communication so you always know when your property will be serviced.'
  },
  {
    icon: HeartHandshake,
    title: 'Professionalism',
    description: 'Respectful, courteous lawn care technicians who maintain clean job sites and treat your property with respect.'
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    description: 'Razor-sharp edging, thorough cleanups, and meticulous plant care down to the last grass blade.'
  },
  {
    icon: HeartHandshake,
    title: 'Customer Care',
    description: 'We listen to your specific property goals and deliver personalized solutions that fit your budget.'
  }
];

const SingleLandingPage = ({ onOpenEstimate }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: SERVICES_DATA[0].title,
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    // Lazy load third party form embed script after initial load to keep initial Lighthouse score clean
    const loadEmbedScript = () => {
      if (!document.getElementById('kdlead-embed-script')) {
        const script = document.createElement('script');
        script.id = 'kdlead-embed-script';
        script.src = 'https://link.kdlead.com/js/form_embed.js';
        script.async = true;
        document.body.appendChild(script);
      }
    };
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(loadEmbedScript, { timeout: 2500 });
    } else {
      setTimeout(loadEmbedScript, 2000);
    }
  }, []);

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!contactForm.name.trim()) errs.name = 'Please enter your full name.';
    if (!contactForm.phone.trim()) {
      errs.phone = 'Please enter your phone number.';
    } else if (contactForm.phone.replace(/\D/g, '').length < 7) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!contactForm.address.trim()) errs.address = 'Please enter your property address.';

    setFormErrors(errs);
    if (Object.keys(errs).length === 0) {
      setFormSubmitting(true);
      setTimeout(() => {
        setFormSubmitting(false);
        setFormSubmitted(true);
      }, 600);
    }
  };

  return (
    <>
      <SEO
        title="J Landscaping LLC | Premier Landscaping & Lawn Care in Liverpool, NY"
        description="Professional landscaping, lawn care, hardscaping, sod, mulch, and seasonal cleanups in Liverpool, NY. Request your free estimate today!"
        path="/"
      />

      {/* 1. HERO SECTION (#home) */}
      <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-36 text-white overflow-hidden min-h-[85vh] sm:min-h-[88vh] flex items-center">
        <picture className="absolute inset-0 w-full h-full z-0">
          <source media="(max-width: 768px)" srcSet={getAssetUrl('/images/hero-mobile.webp')} type="image/webp" />
          <img
            src={getAssetUrl('/images/hero-landscape.webp')}
            alt="Golden sunset lawn mowing and professional property landscaping by J Landscaping LLC in Liverpool NY"
            width="1400"
            height="788"
            fetchpriority="high"
            className="w-full h-full object-cover object-center sm:object-center"
          />
        </picture>

        {/* Adaptive Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30 sm:to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 sm:to-black/30 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl space-y-4 sm:space-y-6">
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-sans text-white leading-[0.95] tracking-tight">
              Perfect <br />
              <span className="text-lime-400 font-black">Lawns</span>
            </h1>

            <p className="text-sm sm:text-lg text-white/90 font-sans leading-relaxed max-w-md sm:max-w-none">
              Professional landscaping and lawn care services for homes and properties throughout Liverpool, NY and surrounding communities.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenEstimate}
                className="bg-lime-500 hover:bg-lime-400 text-black font-extrabold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full shadow-2xl hover:shadow-lime-500/40 transition-all text-sm sm:text-base inline-flex items-center justify-center gap-2.5 focus-ring transform hover:-translate-y-0.5"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="bg-black/50 hover:bg-black/70 backdrop-blur-md text-white font-semibold px-6 py-3.5 sm:px-7 sm:py-4 rounded-full border border-white/30 transition-all text-sm sm:text-base focus-ring text-center"
              >
                Explore Services
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION (#services) */}
      <section id="services" className="py-20 bg-white border-t border-sand/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-forest-deep font-sans">
              What We Do Best
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-forest-deep">
              Complete Care for Your Outdoor Space
            </h2>
            <p className="text-sm sm:text-base text-gray-800">
              From weekly lawn mowing to full garden bed transformations, we offer comprehensive landscaping solutions tailored for Liverpool properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {SERVICES_DATA.map((srv) => (
              <ServiceCard
                key={srv.id}
                icon={srv.icon}
                image={srv.image}
                title={srv.title}
                description={srv.description}
                benefits={srv.benefits}
                onLearnMore={() => scrollToSection('contact')}
                onSelectService={onOpenEstimate}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 3. TRANSFORMATIONS & PROCESS SECTION */}
      <BeforeAfterSlider />
      <ProcessTimeline />

      {/* 4. ABOUT SECTION (#about) */}
      <section id="about" className="py-20 bg-white border-t border-sand/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-forest-deep font-sans">
                Our Story &amp; Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-forest-deep">
                Local Landscaping. Personal Service.
              </h2>
              <p className="text-base text-gray-800 leading-relaxed">
                J Landscaping LLC was established to provide Liverpool homeowners and commercial property owners with reliable, high-grade landscaping services without the hassle.
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                Whether routine lawn maintenance, seasonal cleanups, or installing fresh mulch and decorative stone, our mission is to make outdoor property care effortless for our clients. We believe that a neatly kept lawn and well-structured landscape enhance both property value and personal peace of mind.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-4 shadow-organic border border-sand/40 space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-inner">
                  <img
                    src={getAssetUrl('/images/about-team.webp')}
                    alt="J Landscaping LLC property maintenance service in Liverpool NY"
                    width="800"
                    height="600"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-white/90 rounded-xl space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-forest-deep font-bold">
                    <MapPin className="w-4 h-4 text-forest-deep shrink-0" />
                    <span>Based locally in Liverpool, NY 13088</span>
                  </div>
                  <p className="text-gray-800">
                    Serving residential lawns, HOA communities, and commercial grounds throughout Onondaga County.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Core Values Grid */}
          <div className="mt-16 pt-16 border-t border-sand/40">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-forest-deep font-sans">
                Guiding Principles
              </span>
              <h3 className="text-2xl font-bold font-serif text-forest-deep">Our Core Values</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {CORE_VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 shadow-premium border border-sand/40 space-y-3 hover:border-sage/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sage/15 text-forest-deep flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold font-serif text-forest-deep">{val.title}</h4>
                    <p className="text-xs text-gray-800 leading-relaxed">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY US SECTION (#why-us) */}
      <section id="why-us" className="py-20 bg-white border-y border-sand/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-forest-deep font-sans">
              The J Landscaping Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-forest-deep">
              Why Liverpool Property Owners Choose J Landscaping LLC
            </h2>
            <p className="text-sm sm:text-base text-gray-800">
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
                  <div className="w-12 h-12 rounded-full bg-sage/15 border border-sage/30 text-forest-deep flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-serif text-forest-deep">{item.title}</h3>
                  <p className="text-xs text-gray-800 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. REVIEWS SECTION (#reviews) */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-forest-deep font-sans">
              Client Satisfaction
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-forest-deep">
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-base text-gray-800">
              Read honest feedback from homeowners and property managers in Liverpool, NY.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS_PREVIEW.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-premium border border-sand/40 flex flex-col justify-between space-y-6 hover:shadow-2xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-800 font-semibold bg-gray-100 px-2.5 py-1 rounded-full">
                      {rev.service}
                    </span>
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed italic">
                    "{rev.review}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-sand/30 text-xs">
                  <span className="font-bold text-forest-deep">{rev.name}</span>
                  <span className="text-gray-800">{rev.location}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CONTACT SECTION (#contact) */}
      <section id="contact" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                    <img
                      src={getAssetUrl('/images/logo.webp')}
                      alt="J Landscaping LLC Logo"
                      width="40"
                      height="40"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-serif text-forest-deep">J Landscaping LLC</h2>
                    <span className="text-xs text-gray-800 font-medium">Liverpool, NY Property Maintenance</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-gray-800">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-forest-deep shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-forest-deep">Address</strong>
                      <span>106 Kings Park Dr, Liverpool, NY 13090</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-forest-deep shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-forest-deep">Phone / Text</strong>
                      <a href="tel:7745045296" className="text-forest-deep hover:underline transition-colors font-bold">
                        (774) 504-5296
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-forest-deep shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-forest-deep">Email</strong>
                      <a href="mailto:albany@kdtreeservices.com" className="text-forest-deep hover:underline transition-colors font-bold break-all">
                        albany@kdtreeservices.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-forest-deep shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-forest-deep">Operating Hours</strong>
                      <span>Monday – Saturday: 7:00 AM – 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lazy Load Map */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 text-center space-y-4 shadow-sm">
                <h3 className="text-base font-bold font-serif text-forest-deep">Liverpool Service Location Map</h3>
                {showMap ? (
                  <div className="aspect-video rounded-2xl overflow-hidden border border-gray-200">
                    <iframe
                      title="J Landscaping LLC Liverpool NY Service Map"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src="https://maps.google.com/maps?q=106+Kings+Park+Dr%2C+Liverpool%2C+NY+13090&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    ></iframe>
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-50 rounded-2xl border border-gray-200 flex flex-col items-center justify-center p-4 space-y-2">
                    <Map className="w-8 h-8 text-forest-deep" />
                    <p className="text-xs text-gray-800 font-medium">Click to load interactive Liverpool map</p>
                    <button
                      type="button"
                      onClick={() => setShowMap(true)}
                      className="bg-lime-500 text-black font-extrabold text-xs px-4 py-2 rounded-full hover:bg-lime-400 transition-colors focus-ring"
                    >
                      Load Liverpool Map
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-white text-charcoal rounded-3xl p-4 sm:p-8 shadow-premium border border-gray-200">
              <h2 className="text-2xl font-bold font-serif text-forest-deep mb-2">
                Request Your Free Estimate
              </h2>
              <p className="text-xs sm:text-sm text-charcoal/70 mb-4">
                Fill out the form below and our team will get back to you promptly with a quote or to schedule an on-site property evaluation.
              </p>

              <div className="w-full min-h-[650px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://link.kdlead.com/widget/form/ZwAXZVBFNosWlFUs1SPx"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', minHeight: '650px', border: 'none', borderRadius: '8px' }}
                  id="inline-ZwAXZVBFNosWlFUs1SPx" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form 0"
                  data-height="953"
                  data-layout-iframe-id="inline-ZwAXZVBFNosWlFUs1SPx"
                  data-form-id="ZwAXZVBFNosWlFUs1SPx"
                  title="Request Free Estimate Form"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SingleLandingPage;
