import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/userSlice';
import './navigation.css';

function Navigation() {
  const dispatch = useDispatch();
  return (
    <nav>
      <div className="tot">
        <a className=" titl" href="/cars">Car Rentals</a>
        <div className="navi">
          <ul className="list">
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/cars">Cars List</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/add_car">Add Car</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/rent_car">Rent Cars</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/fovaurvite_car">My Favourite</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/remove_cars">Remove Car</a>
            </li>
            <li className="log">
              <Link
                to="/login"
                className="menu-bars"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Log out
              </Link>
            </li>
          </ul>
        </div>

        <ul className="list">
          <li className="nav-item ">
            <a className="nav-link active" aria-current="page" href="/cars">Car</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/car_form">Add Car</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/rent_car">Rent Car</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/fovaurvite_car">My Favourite</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/remove_car">Remove Car</a>
          </li>
        </ul>
        <div className="mt-5">
          <Link
            to="/login"
            className="ps-5 mt-5"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Log Out
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navigation;
