import React from 'react';
import { MapPin, Clock, Award, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const PILLARS = [
  {
    icon: MapPin,
    title: 'Local Knowledge',
    description: 'We understand Liverpool NY soil types, shade conditions, and harsh Central NY seasonal weather transitions. Our lawn care schedules and plant recommendations are specifically tuned for local turf varieties.'
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: 'No endless waiting or missed appointments. We respect your schedule with predictable weekly maintenance days and clear, responsive communication.'
  },
  {
    icon: Award,
    title: 'Quality Workmanship',
    description: 'From razor-sharp lawn edges and clean flower bed borders to meticulous blow-downs off driveways and walkways, we take genuine pride in every property we touch.'
  },
  {
    icon: ShieldCheck,
    title: 'Complete Property Solutions',
    description: 'Instead of dealing with multiple contractors, J Landscaping LLC manages your lawn mowing, mulch bed refreshes, shrub trimming, spring/fall cleanups, and hardscaping all under one roof.'
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Focused Guarantee',
    description: 'Every project is executed to ensure your property looks better than when we arrived. We inspect our work before leaving to guarantee 100% satisfaction.'
  }
];

const WhyUs = ({ navigate, onOpenEstimate }) => {
  return (
    <>
      <SEO
        title="Why Choose J Landscaping LLC | Liverpool, NY"
        description="Discover why homeowners across Liverpool, NY choose J Landscaping LLC for reliable lawn maintenance, local expertise, quality workmanship, and customer care."
        path="/why-us"
      />

      {/* HERO SECTION */}
      <section className="pt-28 pb-16 bg-forest-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold font-sans">
            Our Advantage
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white leading-tight">
            More Than Landscaping. <br />
            <span className="text-gold">We Care About Your Property.</span>
          </h1>
          <p className="text-base sm:text-lg text-sand/90 font-sans max-w-2xl mx-auto">
            Discover what sets J Landscaping LLC apart as Liverpool’s trusted choice for outdoor maintenance and lawn care.
          </p>
        </div>
      </section>

      {/* CORE PILLARS SECTION */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-8">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-premium border border-sand/40 flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-sage/40 transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-sage/15 border border-sage/30 text-forest flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-sage uppercase tracking-wider">
                        Standard 0{idx + 1}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold font-serif text-forest-deep">
                      {pillar.title}
                    </h2>
                    <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sand/30 text-forest text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                      <span>J Landscaping Guarantee</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* COMPARISON CALLOUT */}
      <section className="py-20 bg-sand-light/50 border-y border-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-organic border border-sand/40 space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-sage font-sans">
                Property Care Comparison
              </span>
              <h2 className="text-3xl font-bold font-serif text-forest-deep">
                What You Can Expect From Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Typical Experience */}
              <div className="bg-red-50/40 p-6 rounded-2xl border border-red-200/50 space-y-3">
                <h3 className="text-base font-bold text-red-900 font-serif">Generic Lawn Services</h3>
                <ul className="space-y-2 text-xs text-charcoal/80">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Inconsistent mowing schedules &amp; unreturned calls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Messy grass clippings left on driveways and beds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Rushed jobs with dull mower blades causing brown lawn tips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Surprise costs and unconfirmed service dates</span>
                  </li>
                </ul>
              </div>

              {/* J Landscaping Standard */}
              <div className="bg-sage/10 p-6 rounded-2xl border border-sage/30 space-y-3">
                <h3 className="text-base font-bold text-forest-deep font-serif">The J Landscaping LLC Way</h3>
                <ul className="space-y-2 text-xs text-charcoal/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>Dependable weekly schedule &amp; fast digital estimates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>Thorough blow-down of all hard surfaces &amp; clean walkways</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>Sharpened mower blades for clean turf cuts and lawn health</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>Transparent pricing with 100% upfront quotes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                onClick={onOpenEstimate}
                className="bg-forest hover:bg-forest-dark text-white font-bold px-8 py-3.5 rounded-full shadow-organic text-sm inline-flex items-center gap-2 focus-ring"
              >
                <span>Get a Free Estimate for Your Property</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
