import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="d-flex w-100">
      <Router>
        <Navigation />
        {/* <div className="d-flex flex-grow-1 justify-content-center">
          <Routes>
            <Route path="/" element={<Doctors />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/" element={<Doctors />} />
            <Route path="/doctor" element={<Detail />} />
            <Route path="/reserve_form" exact element={<ReserveForm />} />
            <Route path="/reservation" exact element={<Reservations />} />
            <Route path="/add_doctor" exact element={<DoctorForm />} />
            <Route path="/delete_doctor" exact element={<DoctorDelete />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
          </Routes>
        </div> */}
      </Router>
    </div>

  );
}

export default App;
