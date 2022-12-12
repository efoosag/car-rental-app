/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getCars } from '../../store/detail';
import './Car.css';

function Car({ car }) {
  const dispatch = useDispatch();
  const handleCarDetails = () => {
    dispatch(getCars(car));
  };

  const {
    name, model, feature, photo,
  } = car;

  return (
    <>
      <div className="car-box">
        <Link to="/detail">
          <img className="car-image" src={photo} alt={name} onClick={handleCarDetails} />
        </Link>
        <h4 className="car-title">{model}</h4>
        <p className="car-feature">{feature}</p>
        <h3 className="car-name" style={{ color: '#fd7e14' }}>{name}</h3>
      </div>
    </>

  );
}

Car.propTypes = {
  car: PropTypes.instanceOf(Object).isRequired,
};

export default Car;
