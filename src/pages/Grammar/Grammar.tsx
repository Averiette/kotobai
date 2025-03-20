import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ChatBox from "../../Components/AiChatBlock/ChatBox";
import SearchBox from "../../Components/SearchBox/SearchBox";

const Grammar: React.FC = () => {
  return (
    <div className="container">
      <div className="main-layout">
        <Navbar />
        <h1>NGỮ PHÁP</h1>
        <SearchBox />
        <ChatBox />
      </div>
      <Footer />
    </div>
  );
};

export default Grammar;
