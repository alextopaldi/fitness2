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

function App() {

  // const [auth, setAuth] = useState(false)

  // async function checkTokenValidity() {
  //     console.log('go')
  //     const token = localStorage.getItem('token')
  //     try {
  //         const response = await axios.get('http://26.250.164.255:5000/check-token', {
  //         headers: {
  //             'Authorization': `${token}`
  //         }
  //         })
  //         if (response.status === 200) {
  //           setAuth(true)
  //         }
  //         console.log(response)
  //     } catch (error) {
          
  //         console.log(error)
  //     }
  // }

  // useEffect(() => {
  //   checkTokenValidity()
    
  // },[])

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
        {/* <Route
          path="/profule"
          element={
            <PrivateRoute auth={auth}>
              <ProfilePage/>
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
