import React from "react";
import './Rent.css';

const Rent = ({ rent }) => (

  <div className="res-contain remove-container">
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Car Brand</th>
          <th scope="col">Collection Date</th>
          <th scope="col">Number of Days</th>
          <th scope="col">City/Location</th>
        </tr>
      </thead>
      <tbody>
        <tr key={rent.id} className="lines">
          <td>{rent.car_brand}</td>
          <td>{rent.rent_date}</td>
          <td>{rent.number_of_days}</td>
          <td>{rent.location}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Rent;
