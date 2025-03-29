import React from 'react'
// Components
import Navbar from '@Components/Navbar/Navbar'
import Cards from "@Components/Cards/Cards";

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Cards />
    </div>
  );
};

export default App;