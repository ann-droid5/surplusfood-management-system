import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeaturedProducts from './components/FeaturedProducts.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import WhyFreshSave from './components/WhyFreshSave.jsx';
import FoodPartnerSection from './components/FoodPartnerSection.jsx';
import Footer from './components/Footer.jsx';
import NoticeModal from './components/NoticeModal.jsx';

export default function App() {
  const [modalState, setModalState] = useState(null);

  const openNotice = (type) => setModalState({ type });
  const openProductDetails = (product) =>
    setModalState({ type: 'product', product });
  const closeModal = () => setModalState(null);

  return (
    <>
      <Navbar onOpenNotice={openNotice} />
      <main>
        <Hero onJoinPartner={() => openNotice('partner')} />
        <FeaturedProducts onViewDetails={openProductDetails} />
        <HowItWorks />
        <WhyFreshSave />
        <FoodPartnerSection onBecomePartner={() => openNotice('partner')} />
      </main>
      <Footer onOpenNotice={openNotice} />
      <NoticeModal modalState={modalState} onClose={closeModal} />
    </>
  );
}
