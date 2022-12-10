import React from "react";

const Rent = ({ rent }) => (
  <article className="rent">
    <span>Car Brand</span>
    {' '}
    <h3>
      {' '}
      {rent.car_brand}
    </h3>
    <span>Collection Date</span>
    {' '}
    <p>
      {' '}
      {rent.rent_date}
    </p>
    <span>Number of Days</span>
    <p>
      {' '}
      {rent.number_of_days}
    </p>
    <span>City/Location</span>
    <p>
      {' '}
      {rent.location}
    </p>
  </article>
);

export default Rent;
