import React from 'react';
import './navigation.css';

function Navigation() {
  return (
    <nav>
      <div className="tot">
        <a className="nav-link titl" href="/houses">House Rentals</a>
        <div className="navi">
          <ul className="list">
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/houses">Houses</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/house_form">Add House</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/rent_house">Rent House</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/fovaurvite_house">By Favourite</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/remove_houses">Remove House</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
