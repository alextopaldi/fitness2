import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { FoodSearch } from './components/FoodSearch';
import { Navbar } from './components/Navigation';
import { Registration } from './components/Registration';
import { CalculatorPage } from './pages/Calculator';
import { FoodSearchPage } from './pages/FoodSearch';
import { LoginPage } from './pages/Login';
import { RegistrationPage } from './pages/Registration';
import { TrainingPage } from './pages/Training';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/registration' element={<RegistrationPage/>}></Route>
        <Route path='/foodsearch' element={<FoodSearchPage/>}></Route>
        <Route path='/calculator' element={<CalculatorPage/>}></Route>
        <Route path='/training' element={<TrainingPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
