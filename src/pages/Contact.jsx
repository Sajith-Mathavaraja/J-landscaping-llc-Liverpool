import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Trees, Map } from 'lucide-react';
import SEO from '../components/SEO';

const SERVICES_LIST = [
  'Lawn Care & Maintenance',
  'Landscape Design & Installation',
  'Mulch & Decorative Stone',
  'Shrub & Plant Care',
  'Spring & Fall Cleanup',
  'Sod & Lawn Installation',
  'Hardscaping & Walkways',
  'Property Cleanup / Other'
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: SERVICES_LIST[0],
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number.';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.address.trim()) errs.address = 'Please enter your property address in Liverpool or nearby.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      <SEO
        title="Contact J Landscaping LLC | Liverpool, NY"
        description="Contact J Landscaping LLC for free landscaping and lawn care estimates in Liverpool, NY. Phone, email, service area, operating hours, and online inquiry form."
        path="/contact"
      />

      {/* HERO SECTION */}
      <section className="pt-28 pb-16 bg-forest-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold font-sans">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white leading-tight">
            Let's Talk About Your Property
          </h1>
          <p className="text-base sm:text-lg text-sand/90 font-sans max-w-2xl mx-auto">
            Ready to upgrade your lawn or schedule landscape maintenance? Contact J Landscaping LLC today for a fast, free estimate.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-forest-deep text-white rounded-3xl p-6 sm:p-8 shadow-organic space-y-6">
                <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <Trees className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-serif text-white">J Landscaping LLC</h2>
                    <span className="text-xs text-sand/80">Liverpool, NY Property Maintenance</span>
                  </div>
                </div>

                {/* Info Items */}
                <div className="space-y-4 text-sm text-sand/90">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white">Primary Location</strong>
                      <span>Liverpool, NY 13088</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white">Phone / Text Inquiry</strong>
                      <span>Fast response for Liverpool &amp; Onondaga County homeowners</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white">Free Estimates</strong>
                      <span>Direct online submission or phone consultation</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white">Operating Hours</strong>
                      <span>Monday – Saturday: 7:00 AM – 6:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Service Area Callout */}
                <div className="pt-6 border-t border-white/10 space-y-2 text-xs">
                  <strong className="text-gold uppercase tracking-wider block">Service Area Communities:</strong>
                  <p className="text-sand/80 leading-relaxed">
                    Liverpool, Clay, Salina, Cicero, Baldwinsville, North Syracuse, and surrounding Onondaga County zip codes.
                  </p>
                </div>
              </div>

              {/* Lazy Load Map Container (Zero Performance Impact On Initial Load) */}
              <div className="bg-white rounded-3xl p-6 shadow-premium border border-sand/40 space-y-4 text-center">
                <h3 className="text-base font-bold font-serif text-forest-deep">Liverpool Service Location Map</h3>
                {showMap ? (
                  <div className="aspect-video rounded-2xl overflow-hidden border border-sand/60">
                    <iframe
                      title="J Landscaping LLC Liverpool NY Service Map"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src="https://maps.google.com/maps?q=Liverpool%2C%20NY%2013088&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    ></iframe>
                  </div>
                ) : (
                  <div className="aspect-video bg-sand-light/60 rounded-2xl border border-sand/60 flex flex-col items-center justify-center p-4 space-y-2">
                    <Map className="w-8 h-8 text-forest/70" />
                    <p className="text-xs text-charcoal/70">Click to load interactive Liverpool map</p>
                    <button
                      type="button"
                      onClick={() => setShowMap(true)}
                      className="bg-forest text-white font-bold text-xs px-4 py-2 rounded-full hover:bg-forest-dark transition-colors focus-ring"
                    >
                      Load Liverpool Map
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-premium border border-sand/40">
              <h2 className="text-2xl font-bold font-serif text-forest-deep mb-2">
                Request Your Free Estimate
              </h2>
              <p className="text-xs sm:text-sm text-charcoal/70 mb-6">
                Fill out the form below and our team will get back to you promptly with a quote or to schedule an on-site property evaluation.
              </p>

              {submitted ? (
                <div className="text-center py-12 space-y-4 bg-sage/10 rounded-2xl p-6 border border-sage/30">
                  <div className="w-16 h-16 bg-sage text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-forest-deep font-serif">Estimate Request Received!</h3>
                  <p className="text-sm text-charcoal/80 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. We have received your inquiry for <strong>{formData.address}</strong> regarding <strong>{formData.service}</strong>. We will review your property details and contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        address: '',
                        service: SERVICES_LIST[0],
                        message: ''
                      });
                    }}
                    className="mt-4 bg-forest text-white font-bold text-xs px-6 py-3 rounded-full hover:bg-forest-dark transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Robert Miller"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus-ring ${
                        errors.name ? 'border-red-500 bg-red-50/30' : 'border-sand-dark/60 bg-offwhite/50'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(315) 555-0192"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus-ring ${
                          errors.phone ? 'border-red-500 bg-red-50/30' : 'border-sand-dark/60 bg-offwhite/50'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-1">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="robert@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus-ring ${
                          errors.email ? 'border-red-500 bg-red-50/30' : 'border-sand-dark/60 bg-offwhite/50'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-address" className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-1">
                      Property Address / Neighborhood <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-address"
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. 312 Second St, Liverpool, NY 13088"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus-ring ${
                        errors.address ? 'border-red-500 bg-red-50/30' : 'border-sand-dark/60 bg-offwhite/50'
                      }`}
                    />
                    {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-1">
                      Service Needed
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-sand-dark/60 bg-offwhite/50 text-sm focus-ring"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-1">
                      Project Details / Additional Notes
                    </label>
                    <textarea
                      id="contact-message"
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about lawn size, specific project goals, or preferred schedule..."
                      className="w-full px-4 py-3 rounded-xl border border-sand-dark/60 bg-offwhite/50 text-sm focus-ring"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-forest hover:bg-forest-dark text-white font-bold py-4 px-6 rounded-xl shadow-organic flex items-center justify-center gap-2 text-base transition-all focus-ring"
                    >
                      {submitting ? (
                        'Sending Estimate Request...'
                      ) : (
                        <>
                          <span>Request My Free Estimate</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
