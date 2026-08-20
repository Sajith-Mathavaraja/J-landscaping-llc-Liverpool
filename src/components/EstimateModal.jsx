import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const EstimateModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  // Close on Escape key press & dynamically load embed script when modal opens
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      if (!document.getElementById('kdlead-embed-script')) {
        const script = document.createElement('script');
        script.id = 'kdlead-embed-script';
        script.src = 'https://link.kdlead.com/js/form_embed.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="estimate-modal-title"
        className="bg-white text-charcoal rounded-3xl shadow-2xl max-w-xl w-full max-h-[92vh] overflow-hidden border border-gray-200 relative flex flex-col"
      >
        {/* Modal Header */}
        <div className="bg-forest-deep text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <img
              src={getAssetUrl('/images/logo.webp')}
              alt="J Landscaping LLC"
              width="36"
              height="36"
              className="w-9 h-9 object-contain rounded-lg"
            />
            <div>
              <h3 id="estimate-modal-title" className="text-base font-bold font-serif text-white leading-tight">
                Request a Free Estimate
              </h3>
              <p className="text-xs text-sand/80">Liverpool, NY &amp; Surrounding Areas</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-sand/80 hover:text-white hover:bg-white/10 focus-ring"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Iframe Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-white">
          <iframe
            src="https://link.kdlead.com/widget/form/ZwAXZVBFNosWlFUs1SPx"
            style={{ width: '100%', height: '100%', minHeight: '650px', border: 'none', borderRadius: '8px' }}
            id="modal-inline-ZwAXZVBFNosWlFUs1SPx"
            scrolling="no"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 0"
            data-height="953"
            data-layout-iframe-id="modal-inline-ZwAXZVBFNosWlFUs1SPx"
            data-form-id="ZwAXZVBFNosWlFUs1SPx"
            title="Request Free Estimate Form"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default EstimateModal;
