import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import PremiumPopup from './Components/PremiumPopup/PremiumPopup'
import BannerSlider from "./Components/bannerslider/BannerSlider";
import Cards from "./Components/Cards/Cards";
import GroupFb from './Components/bannerjoingroup/GroupFb';
import Footer from './Components/Footer/Footer'; 

const Home: React.FC = () => {
    return (
      <div className="container">
        <Navbar />  
        <PremiumPopup />
        <BannerSlider />
        <Cards />
        <GroupFb />
        <Footer />  
      </div>
    );
  };  
  
  export default Home;