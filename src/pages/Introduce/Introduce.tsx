import React from 'react';
// Components
import NavbarIntro from '@Components/NavbarIntro/NavbarIntro'
import Footer from '@Components/Footer/Footer'
import Thumbnail from '@Components/Thumbnail/Thumbnail'
import HighlightIntro from '@Components/HighlightIntro/HighlightIntro'
import HighlightContent from '@Components/HighlightContent/HighlightContent'

const Introduce: React.FC = () => {
  return (
    <div className="container">
      <NavbarIntro />
      <Thumbnail />
      <HighlightContent />
      <HighlightIntro />
      <Footer />
    </div>
  );
};

export default Introduce;
