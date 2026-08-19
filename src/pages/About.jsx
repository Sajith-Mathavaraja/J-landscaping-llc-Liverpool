import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Eye, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

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

const About = ({ navigate, onOpenEstimate }) => {
  return (
    <>
      <SEO
        title="About J Landscaping LLC | Liverpool, NY"
        description="Learn about J Landscaping LLC, a reliable local landscaping company committed to quality lawn care, personal service, and beautiful outdoor spaces in Liverpool, NY."
        path="/about"
      />

      {/* HERO SECTION */}
      <section className="pt-28 pb-16 bg-forest-deep text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold font-sans">
            About Our Company
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white leading-tight">
            Local Landscaping. Personal Service.
          </h1>
          <p className="text-base sm:text-lg text-sand/90 font-sans leading-relaxed">
            J Landscaping LLC is dedicated to enhancing and maintaining beautiful outdoor properties throughout Liverpool, NY with dependable, high-quality care.
          </p>
        </div>
      </section>

      {/* OUR STORY & APPROACH */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Left */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sage font-sans">
                Our Story
              </span>
              <h2 className="text-3xl font-bold font-serif text-forest-deep">
                Built on Quality &amp; Pride of Workmanship
              </h2>
              <p className="text-base text-charcoal/80 leading-relaxed">
                J Landscaping LLC was established with a straightforward goal: provide Liverpool homeowners and commercial property owners with reliable, high-grade landscaping services without the hassle.
              </p>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                Whether routine lawn maintenance, seasonal cleanups, or installing fresh mulch and decorative stone, our mission is to make outdoor property care effortless for our clients. We believe that a neatly kept lawn and well-structured landscape enhance both property value and personal peace of mind.
              </p>

              <div className="pt-2 space-y-3 border-t border-sand/40">
                <h3 className="text-lg font-bold font-serif text-forest-deep">Our Approach</h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  We approach every project with thorough preparation, proper tools, and honest communication. From straightforward estimates to meticulous final site blow-downs, we work diligently to leave every property looking better than when we arrived.
                </p>
              </div>
            </div>

            {/* Visual Right */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-4 shadow-organic border border-sand/40 space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-inner">
                  <img
                    src="/images/about-team.webp"
                    alt="J Landscaping LLC property maintenance service in Liverpool NY"
                    width="800"
                    height="600"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-sand-light/60 rounded-xl space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-forest-deep font-bold">
                    <MapPin className="w-4 h-4 text-gold shrink-0" />
                    <span>Based locally in Liverpool, NY 13088</span>
                  </div>
                  <p className="text-charcoal/70">
                    Serving residential lawns, HOA communities, and commercial grounds throughout Onondaga County.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR VALUES GRID */}
      <section className="py-20 bg-sand-light/50 border-y border-sand/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-sage font-sans">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-forest-deep">
              Our Core Values
            </h2>
            <p className="text-sm text-charcoal/80">
              The fundamental standards that guide every property interaction and job site decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-premium border border-sand/40 space-y-3 hover:border-sage/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-sage/15 text-forest flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-serif text-forest-deep">{val.title}</h3>
                  <p className="text-xs text-charcoal/70 leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* LOCAL FOCUS SECTION */}
      <section className="py-20 bg-forest-deep text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto">
            <MapPin className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
            Rooted in Liverpool, NY
          </h2>
          <p className="text-base text-sand/90 leading-relaxed max-w-2xl mx-auto font-sans">
            As a local business, we understand Central New York's distinct seasons — from humid summer lawn growth spurts to heavy fall leaf drops. We tailor our scheduling and landscape techniques specifically for Liverpool properties.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEstimate}
              className="bg-gold text-forest-deep font-bold px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors text-sm flex items-center gap-2 focus-ring"
            >
              <span>Get Your Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full border border-white/20 hover:bg-white/20 transition-colors text-sm focus-ring"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
