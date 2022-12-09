import React from 'react';
import { PropTypes } from 'prop-types';
import './Car.css';

function Car({ car }) {
  const {
    name, model, feature, photo,
  } = car;

  return (
    <>
      <div className="car-box">
        <img className="car-image" src={photo} alt={name} />
        <h4 className="car-title">{model}</h4>
        <p className="car-feature">{feature}</p>
        <h3 className="car-name">{name}</h3>
      </div>
    </>

  );
}

Car.propTypes = {
  car: PropTypes.instanceOf(Object).isRequired,
};

export default Car;
