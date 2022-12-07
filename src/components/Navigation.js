import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import "./navigation.css";

function Navigation() {
  const dispatch = useDispatch();
  return (
    <nav>
      <div className="tot">
        <a className="nav-link titl" href="/">
          House Rentals
        </a>

        <div className="navi">
          <ul className="list">
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/houses">
                Houses
              </a>
            </li>
            <li className="nav-item py-2">
              <a
                className="nav-link active"
                aria-current="page"
                href="/house_form"
              >
                Add House
              </a>
            </li>

            <li className="nav-item py-2">
              <a
                className="nav-link active"
                aria-current="page"
                href="/rent_form"
              >
                Rent House
              </a>
            </li>

            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/rents">
                My Rents
              </a>
            </li>

            <li className="nav-item py-2">
              <a
                className="nav-link active"
                aria-current="page"
                href="/fovaurvite_house"
              >
                By Favourite
              </a>
            </li>
            <li className="nav-item py-2">
              <a
                className="nav-link active"
                aria-current="page"
                href="/remove_houses"
              >
                Remove House
              </a>
            </li>
            <li>
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
      </div>
    </nav>
  );
}

export default Navigation;
