import React from 'react';
import { Star, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const FULL_REVIEWS = [
  {
    id: 1,
    name: 'Michael T.',
    location: 'Liverpool, NY',
    rating: 5,
    service: 'Lawn Mowing & Mulch Installation',
    date: 'Summer 2025',
    review: 'J Landscaping LLC transformed our front yard! The stripe mowing is immaculate and the fresh dark mulch beds look like a magazine cover. Punctual, polite, and very fair pricing.'
  },
  {
    id: 2,
    name: 'Amanda R.',
    location: 'Clay, NY',
    rating: 5,
    service: 'Spring Yard Cleanup & Pruning',
    date: 'Spring 2025',
    review: 'They cleared out years of accumulated leaves and overgrown bushes in one afternoon. Our yard hasn’t looked this clean in years. Highly recommend J Landscaping!'
  },
  {
    id: 3,
    name: 'David K.',
    location: 'Liverpool, NY',
    rating: 5,
    service: 'Landscape Bed Design & Planting',
    date: 'Fall 2025',
    review: 'Professional team from start to finish. They helped select the right perennials for our soil type and installed a beautiful stone border. True local craftsmen.'
  },
  {
    id: 4,
    name: 'Jennifer S.',
    location: 'Salina, NY',
    rating: 5,
    service: 'Sod Installation & Lawn Repair',
    date: 'Summer 2025',
    review: 'We had dead patches throughout our backyard after tree removal. J Landscaping removed the old dirt, regraded, and laid fresh sod. Two weeks later it’s thick and vibrant green!'
  },
  {
    id: 5,
    name: 'Robert & Ellen M.',
    location: 'Cicero, NY',
    rating: 5,
    service: 'Weekly Lawn Care Maintenance',
    date: 'Season-Long Client',
    review: 'Consistent every single week. They edge the driveway razor-sharp, trim around all flower beds, and always blow off the porch and driveway before leaving. 10/10 service.'
  },
  {
    id: 6,
    name: 'Brian H.',
    location: 'Baldwinsville, NY',
    rating: 5,
    service: 'Fall Cleanup & Hardscape Border',
    date: 'Fall 2025',
    review: 'Called them for a late fall leaf blowout and stone border repair. They arrived on time, gave an honest quote, and finished the job cleanly. Will be using them every year.'
  }
];

const Reviews = ({ navigate, onOpenEstimate }) => {
  return (
    <>
      <SEO
        title="Customer Reviews | J Landscaping LLC | Liverpool, NY"
        description="Read customer testimonials and feedback for J Landscaping LLC. Trusted by homeowners across Liverpool, Clay, Salina, and Cicero, NY for premier landscaping and lawn care."
        path="/reviews"
      />

      {/* HERO SECTION */}
      <section className="pt-28 pb-16 bg-forest-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold font-sans">
            Client Feedback
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white leading-tight">
            Trusted by Property Owners
          </h1>
          <p className="text-base sm:text-lg text-sand/90 font-sans max-w-2xl mx-auto">
            Read what homeowners across Liverpool and Onondaga County say about our landscaping and property maintenance work.
          </p>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FULL_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-premium border border-sand/40 flex flex-col justify-between space-y-6 hover:border-sage/40 transition-colors relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gold">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-sand-dark/40" />
                  </div>

                  <p className="text-sm text-charcoal/80 italic leading-relaxed">
                    "{rev.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-sand/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold font-serif text-forest-deep">{rev.name}</h3>
                      <span className="text-xs text-charcoal/60">{rev.location}</span>
                    </div>
                    <span className="text-[10px] text-charcoal/50">{rev.date}</span>
                  </div>

                  <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-sand/30 rounded-md text-forest text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{rev.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* REVIEWS CTA */}
      <section className="py-20 bg-sand-light border-t border-sand/40 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-sage font-sans">
            Join Our Satisfied Clients
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-forest-deep">
            Ready to Start Your Project?
          </h2>
          <p className="text-base text-charcoal/80 max-w-xl mx-auto">
            Experience the difference of a dependable local Liverpool landscaping company. Contact us today for a prompt, free quote.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenEstimate}
              className="bg-forest hover:bg-forest-dark text-white font-bold px-8 py-4 rounded-full shadow-organic text-base inline-flex items-center gap-2 focus-ring"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-5 h-5 text-gold" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
