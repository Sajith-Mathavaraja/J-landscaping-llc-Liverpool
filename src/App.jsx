import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TermsModal from './components/TermsModal';
import PrivacyModal from './components/PrivacyModal';
import SingleLandingPage from './pages/SingleLandingPage';

function App() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handleOpenEstimate = () => {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-charcoal font-sans antialiased">
      <Header onOpenEstimate={handleOpenEstimate} />

      <main className="flex-1">
        <SingleLandingPage onOpenEstimate={handleOpenEstimate} />
      </main>

      <Footer
        onOpenEstimate={handleOpenEstimate}
        onOpenTerms={() => setIsTermsModalOpen(true)}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
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
