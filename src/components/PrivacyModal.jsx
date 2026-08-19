import React, { useEffect, useRef } from 'react';
import { X, Lock } from 'lucide-react';

const PrivacyModal = ({ isOpen, onClose }) => {
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
        aria-labelledby="privacy-modal-title"
        className="bg-white text-charcoal rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden border border-gray-200 relative flex flex-col"
      >
        {/* Header */}
        <div className="bg-forest-deep text-white px-6 py-4 flex items-center justify-between shrink-0 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-lime-500/20 border border-lime-400/40 flex items-center justify-center text-lime-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 id="privacy-modal-title" className="text-lg font-bold font-serif text-white leading-tight">
                Privacy Policy
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
            <strong>J Landscaping LLC</strong> ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data in compliance with applicable U.S. data protection laws, including the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR) where applicable.
          </p>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">1. Information We Collect</h3>
            <p>We may collect the following categories of personal information when you contact us, request a quote, submit a web form, or use our services:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-charcoal/80">
              <li>Full name</li>
              <li>Mailing or service address</li>
              <li>Email address</li>
              <li>Mobile phone number</li>
              <li>Service request details and project descriptions</li>
              <li>Communication history and preferences</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-base font-bold font-serif text-forest-deep">2. SMS / Text Message Communications</h3>
            
            <div className="space-y-1.5 pl-3 border-l-2 border-lime-500">
              <h4 className="font-semibold text-forest-deep">2a. How We Collect Your Mobile Number</h4>
              <p>
                We collect your mobile phone number when you voluntarily provide it through our website contact forms, phone calls, or other direct communication channels. By providing your mobile number and checking the SMS consent checkbox on our forms, you expressly consent to receive SMS (text message) communications from J Landscaping LLC.
              </p>
            </div>

            <div className="space-y-1 pl-3 border-l-2 border-lime-500">
              <h4 className="font-semibold text-forest-deep">2b. Types of Messages We Send</h4>
              <p>By opting in, you may receive recurring automated text messages from J Landscaping LLC, including:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-charcoal/80">
                <li>Free estimate confirmations and appointment reminders</li>
                <li>Project status updates and scheduling notifications</li>
                <li>Customer support and follow-up communications</li>
                <li>Promotional offers and seasonal service announcements related to our landscaping and lawn care services</li>
              </ul>
            </div>

            <div className="space-y-1 pl-3 border-l-2 border-lime-500">
              <h4 className="font-semibold text-forest-deep">2c. Message Frequency</h4>
              <p>
                Message frequency varies based on your interactions with us, ongoing service needs, and active promotions. You may receive up to 4–8 messages per month depending on your service activity.
              </p>
            </div>

            <div className="space-y-1 pl-3 border-l-2 border-lime-500">
              <h4 className="font-semibold text-forest-deep">2d. Message &amp; Data Rates</h4>
              <p>
                Message and data rates may apply. Charges are determined by your mobile carrier and your individual service plan. J Landscaping LLC is not responsible for any charges incurred from your mobile carrier.
              </p>
            </div>

            <div className="space-y-1 pl-3 border-l-2 border-lime-500">
              <h4 className="font-semibold text-forest-deep">2e. How to Opt Out (STOP)</h4>
              <p>
                You may cancel SMS messages at any time by replying <strong>STOP</strong> to any text message you receive from us. After opting out, you will receive one final confirmation message and will no longer receive SMS communications from J Landscaping LLC unless you re-enroll.
              </p>
            </div>

            <div className="space-y-1 pl-3 border-l-2 border-lime-500">
              <h4 className="font-semibold text-forest-deep">2f. How to Get Help (HELP)</h4>
              <p>For help with our SMS program, reply <strong>HELP</strong> to any message, or contact us directly at:</p>
              <p className="text-xs font-mono bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                Phone: (774) 504-5296 | Email: albany@kdtreeservices.com
              </p>
            </div>
          </section>

          <section className="space-y-2 bg-lime-50 p-4 rounded-xl border border-lime-200">
            <h3 className="text-base font-bold font-serif text-forest-deep">
              3. Mobile Information &amp; SMS Consent — No Third-Party Sharing
            </h3>
            <p className="font-semibold text-forest-deep">
              No mobile information (including your mobile phone number and SMS opt-in consent data) will be shared with third parties or affiliates for marketing or promotional purposes.
            </p>
            <p className="text-xs">
              All other categories of personal data exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">4. How We Use Your Information</h3>
            <p>We use the personal information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-charcoal/80">
              <li>Provide and manage landscaping and lawn care services</li>
              <li>Respond to inquiries and service requests</li>
              <li>Schedule appointments and send reminders</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Improve our website and service quality</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">5. Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar technologies to improve website functionality, analyze traffic, and enhance user experience. Cookies do not store sensitive personal information. By continuing to use this website, you consent to our use of cookies in accordance with this policy.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">6. Data Security</h3>
            <p>
              We implement reasonable administrative, technical, and physical security measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">7. Data Retention</h3>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law. When your data is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">8. Your Privacy Rights</h3>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-charcoal/80">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (including your mobile number and SMS consent record)</li>
              <li><strong>Opt-Out of SMS:</strong> Reply STOP to any text message at any time</li>
              <li><strong>Opt-Out of Marketing:</strong> Contact us directly to be removed from marketing lists</li>
            </ul>
            <p className="text-xs pt-1">
              To exercise any of these rights, contact us at <a href="mailto:albany@kdtreeservices.com" className="text-lime-600 font-semibold underline">albany@kdtreeservices.com</a> or call <a href="tel:7745045296" className="text-lime-600 font-semibold underline">(774) 504-5296</a>.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold font-serif text-forest-deep">9. Changes to This Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised “Last Updated” date. Continued use of our website or services after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-gray-200">
            <h3 className="text-base font-bold font-serif text-forest-deep">10. Contact Information</h3>
            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
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

export default PrivacyModal;
