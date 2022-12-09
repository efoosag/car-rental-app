import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import Cars from './components/Car/Cars';
import './App.css';
import AddCar from './components/Car/carForm/carForm';

function App() {
  const state = useSelector((state) => state.user);
  const logIn = JSON.parse(localStorage.getItem('user')) || state;
  return (
    <div className="nav">
      <Router>
        <div className="nav-dir">
          {logIn.loggedIn === true && <Navigation />}
        </div>
        <div className="nav-wholer">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/add_car" exact element={<AddCar />} />
          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
