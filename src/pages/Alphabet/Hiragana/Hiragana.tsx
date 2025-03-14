import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import Tabs from '../../../Components/tabAlphabet/TabAlphabet';


const Hiragana: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
      <Tabs />
      <Footer />
    </div>
  );
};

export default Hiragana;
