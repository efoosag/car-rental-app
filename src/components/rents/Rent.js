import React from "react";
import './Rent.css';

const Rent = ({ rent }) => (
  // <article className="rent">
  //   <span>Car Brand</span>
  //   {' '}
  //   <h3>
  //     {' '}
  //     {rent.car_brand}
  //   </h3>
  //   <span>Collection Date</span>
  //   {' '}
  //   <p>
  //     {' '}
  //     {rent.rent_date}
  //   </p>
  //   <span>Number of Days</span>
  //   <p>
  //     {' '}
  //     {rent.number_of_days}
  //   </p>
  //   <span>City/Location</span>
  //   <p>
  //     {' '}
  //     {rent.location}
  //   </p>
  // </article>
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
