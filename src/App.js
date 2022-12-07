import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Houses from "./components/Houses";

import RentsShow from "./components/rents/RentsShow";
import "./App.css";
// import AddRentForm from "./components/rents/AddRentForm";

function App() {
  const state = useSelector((state) => state.user);
  const logIn = JSON.parse(localStorage.getItem("user")) || state;
  return (
    <div className="d-flex w-100">
      <Router>
        {logIn.loggedIn ? <Navigation /> : ""}
        <div className="d-flex flex-grow-1 justify-content-center">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/houses" element={<Houses />} />
            <Route path="/rents" element={<RentsShow />} />
            {/* <Route path="/rent_form" element={<AddRentForm />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
