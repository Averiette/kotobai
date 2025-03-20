import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BannerSlider from "../../Components/bannerslider/BannerSlider";
import PracticeList from "../../Components/PracticeList/PracticeList";
import PracticeList113 from "../../Components/PracticeJpd/PracticeJpd113";
import PracticeList123 from "../../Components/PracticeJpd/PracticeJpd123";
import PracticeList133 from "../../Components/PracticeJpd/PracticeJpd133";
import GroupFb from "../../Components/bannerjoingroup/GroupFb";
import Footer from "../../Components/Footer/Footer";
import ChatBox from '../../Components/AiChatBlock/ChatBox'


const Practice: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
      <BannerSlider />
      <PracticeList />
      <PracticeList113 />
      <PracticeList123 />
      <PracticeList133 />
      <ChatBox />
      <GroupFb />
      <Footer />
    </div>
  );
};

export default Practice;
