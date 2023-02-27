import React from 'react';
import './App.scss';
import { FoodSearch } from './components/FoodSearch';
import { Navbar } from './components/Navigation';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <FoodSearch/>
    </div>
  );
}

export default App;
