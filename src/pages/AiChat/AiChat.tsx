import React from 'react';
// Components
import Navbar from '@Components/Navbar/Navbar'
import ChatBlock from '@Components/ChatBlock/ChatBlock'

const AiChat: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
      <ChatBlock />
    </div>
  );
};

export default AiChat;
