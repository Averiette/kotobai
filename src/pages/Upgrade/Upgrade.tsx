import React from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import PremiumBox from '../../Components/PremiumBox/PremiumBox'
import Footer from '../../Components/Footer/Footer'




const Upgrade: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
      <PremiumBox />
      <Footer />
    </div>
  );
};

export default Upgrade;
