import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import "./navigation.css";

const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/cars">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/cars">
                Cars
              </a>
            </li>
            <li className="nav-item py-2">
              <a
                className="nav-link active"
                aria-current="page"
                href="/add_car"
              >
                Add Car
              </a>
            </li>
            <li className="nav-item py-2">
              <a
                className="nav-link active"
                aria-current="page"
                href="/rent_form"
              >
                Rent Car
              </a>
            </li>
            <li className="nav-item py-2">
              <a
                className="nav-link active"
                aria-current="page"
                href="/rentals"
              >
                Show Rents
              </a>
            </li>
            <li className="nav-item py-2">
              <a
                className="nav-link active"
                aria-current="page"
                href="/favourite_cars"
              >
                My Favourite
              </a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/remove_car">Remove Car</a>
            </li>
          </ul>
          <div>
            <Link
              to="/"
              className="menu-bars mb-5 pb-3 px-3"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Log out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
