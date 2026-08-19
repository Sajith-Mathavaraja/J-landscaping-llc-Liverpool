import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import EstimateModal from './components/EstimateModal';
import TermsModal from './components/TermsModal';
import PrivacyModal from './components/PrivacyModal';
import SingleLandingPage from './pages/SingleLandingPage';

function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-charcoal font-sans antialiased">
      <Header onOpenEstimate={() => setIsEstimateModalOpen(true)} />

      <main className="flex-1">
        <SingleLandingPage onOpenEstimate={() => setIsEstimateModalOpen(true)} />
      </main>

      <Footer
        onOpenEstimate={() => setIsEstimateModalOpen(true)}
        onOpenTerms={() => setIsTermsModalOpen(true)}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
      />

      {/* Free Estimate Lead Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
      />

      {/* Terms & Conditions Modal */}
      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}

export default App;
