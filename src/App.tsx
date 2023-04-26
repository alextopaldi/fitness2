import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login';
import { ProfilePage } from './pages/Profile';
import { ExercisePage } from './pages/Exercise';
import { UserFoodPage } from './pages/UserFood';
import { TrainingsPage } from './pages/Trainings';
import { TrainingLargePage } from './pages/TrainingLarge';
import { UserTrainingsPage } from './pages/UserTrainings';
import { UserWeightPage } from './pages/UserWeight';

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
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/training/:id' element={<ExercisePage/>}></Route>
        <Route path='/profile/food' element={<UserFoodPage/>}></Route>
        <Route path='/profile/training' element={<UserTrainingsPage/>}></Route>
        <Route path='/profile/training/:id' element={<TrainingLargePage route='/profile/training'/>}></Route>
        <Route path='/profile/weight' element={<UserWeightPage/>}></Route>
        <Route path='/trainings' element={<TrainingsPage/>}></Route>
        <Route path='/trainings/:id' element={<TrainingLargePage route='/trainings'/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
