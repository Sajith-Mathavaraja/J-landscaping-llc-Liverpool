import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck } from 'lucide-react';

const TermsModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="terms-modal-title"
        className="bg-white text-charcoal rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden border border-gray-200 relative flex flex-col"
      >
        {/* Header */}
        <div className="bg-forest-deep text-white px-6 py-4 flex items-center justify-between shrink-0 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-lime-500/20 border border-lime-400/40 flex items-center justify-center text-lime-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 id="terms-modal-title" className="text-lg font-bold font-serif text-white leading-tight">
                Terms &amp; Conditions
              </h2>
              <p className="text-xs text-sand/80">Effective Date: January 19, 2025 | Last Updated: July 9, 2026</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-sand/80 hover:text-white hover:bg-white/10 focus-ring transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-charcoal/80 leading-relaxed">
          <p className="bg-sand-light/50 p-4 rounded-xl border border-sand/40 text-charcoal">
            Welcome to <strong>J Landscaping LLC</strong>. By accessing this website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
          </p>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">1. Business Identity</h3>
            <p>
              These Terms and Conditions govern your use of the services provided by <strong>J Landscaping LLC</strong>, located at <strong>106 Kings Park Dr, Liverpool, NY 13090</strong>. Contact: <a href="tel:7745045296" className="text-lime-600 font-semibold underline">(774) 504-5296</a> | <a href="mailto:albany@kdtreeservices.com" className="text-lime-600 font-semibold underline">albany@kdtreeservices.com</a>.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">2. Age Requirement (18+)</h3>
            <p>
              By using this website or enrolling in our services, including SMS messaging, you confirm that you are at least 18 years of age. Our SMS program is not directed to individuals under 18.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">3. Terminology</h3>
            <p>
              “Client,” “You,” and “Your” refers to the user of this website. “The Company,” “We,” “Our,” and “Us” refers to <strong>J Landscaping LLC</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-base font-bold font-serif text-forest-deep">4. SMS Messaging Terms of Service</h3>
            
            <div className="space-y-1.5 pl-3 border-l-2 border-lime-500">
              <h4 className="font-semibold text-forest-deep">4a. Program Description &amp; Message Types</h4>
              <p>
                By providing your phone number and checking the SMS consent checkbox on our contact forms, you agree to receive recurring automated text messages from J Landscaping LLC. Messages may include:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-charcoal/80">
                <li>Free estimate confirmations and scheduling notifications</li>
                <li>Appointment reminders and project status updates</li>
                <li>Customer support and service follow-up communications</li>
                <li>Promotional offers and seasonal announcements related to our landscaping and lawn care services</li>
              </ul>
            </div>

            <div className="space-y-1 pl-3 border-l-2 border-lime-500">
              <h4 className="font-semibold text-forest-deep">4b. Message Frequency</h4>
              <p>
                Message frequency varies based on your service activity and interactions with us. You may receive up to 4–8 messages per month. Frequency may increase during active service periods.
              </p>
            </div>

            <div className="space-y-1 pl-3 border-l-2 border-lime-500">
              <h4 className="font-semibold text-forest-deep">4c. Message &amp; Data Rates</h4>
              <p>
                Message and data rates may apply for any messages sent to you from us and to us from you. Charges are determined by your mobile carrier and your individual service plan. J Landscaping LLC is not responsible for any carrier charges.
              </p>
            </div>

            <div className="space-y-1 pl-3 border-l-2 border-lime-500">
              <h4 className="font-semibold text-forest-deep">4d. How to Opt Out (STOP)</h4>
              <p>
                You can opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message we send. After opting out, you will receive a one-time confirmation message and will no longer receive SMS messages from us unless you re-enroll.
              </p>
            </div>

            <div className="space-y-1 pl-3 border-l-2 border-lime-500">
              <h4 className="font-semibold text-forest-deep">4e. How to Get Help (HELP)</h4>
              <p>
                For help with our SMS program, reply <strong>HELP</strong> to any message or contact us directly at:
              </p>
              <p className="text-xs font-mono bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                Phone: (774) 504-5296 | Email: albany@kdtreeservices.com
              </p>
            </div>

            <div className="space-y-1 pl-3 border-l-2 border-lime-500">
              <h4 className="font-semibold text-forest-deep">4f. Carrier Liability Disclaimer</h4>
              <p>
                Mobile carriers are not liable for delayed or undelivered messages. J Landscaping LLC cannot guarantee delivery of SMS messages. Delivery of information through SMS may be subject to your mobile carrier’s capability and coverage area.
              </p>
            </div>

            <div className="space-y-1 pl-3 border-l-2 border-lime-500">
              <h4 className="font-semibold text-forest-deep">4g. Supported Carriers</h4>
              <p>
                Our SMS program is supported by all major U.S. wireless carriers including AT&amp;T, Verizon, T-Mobile, and Sprint. Not all carriers are supported for all messages.
              </p>
            </div>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">5. Cookies</h3>
            <p>
              We use cookies in accordance with our Privacy Policy to improve user experience and website functionality.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">6. Intellectual Property &amp; License</h3>
            <p>
              Unless otherwise stated, J Landscaping LLC owns the intellectual property rights for all content on this website. You may not copy, reproduce, republish, sell, or redistribute any material without prior written permission.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">7. Comments &amp; User Content</h3>
            <p>
              J Landscaping LLC reserves the right to monitor and remove any comments or user-generated content on our platforms that are inappropriate, offensive, or violate these terms.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">8. Content Liability</h3>
            <p>
              We are not responsible for content that appears on external websites linking to us. You agree to defend and protect J Landscaping LLC against any claims arising from your website or digital properties.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">9. Disclaimer</h3>
            <p>
              To the maximum extent permitted by applicable law, J Landscaping LLC excludes all warranties, representations, and conditions relating to our website and services. We are not liable for any loss or damage (including, without limitation, damage for loss of business, profits, or revenue) arising from the use of our website or services.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">10. Changes to These Terms</h3>
            <p>
              We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with a revised “Last Updated” date. Continued use of our website or services constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-gray-200">
            <h3 className="text-base font-bold font-serif text-forest-deep">11. Contact Information</h3>
            <p>For questions about these Terms and Conditions, please contact us:</p>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-1 text-xs">
              <p><strong>Company:</strong> J Landscaping LLC</p>
              <p><strong>Address:</strong> 106 Kings Park Dr, Liverpool, NY 13090</p>
              <p><strong>Phone:</strong> (774) 504-5296</p>
              <p><strong>Email:</strong> albany@kdtreeservices.com</p>
            </div>
          </section>
        </div>

        {/* Footer Bar */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="bg-forest-deep hover:bg-forest text-white font-bold text-xs px-6 py-2.5 rounded-full transition-colors focus-ring"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
