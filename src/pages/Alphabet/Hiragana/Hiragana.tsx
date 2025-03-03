import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import HiraganaBlock from '../../../Components/Alphabet/Hiragana/Hiragana'


const Hiragana: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
      <HiraganaBlock />
      <Footer />
    </div>
  );
};

export default Hiragana;
