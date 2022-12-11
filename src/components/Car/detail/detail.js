/* eslint-disable react/no-unknown-property */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillCaretLeft } from 'react-icons/ai';
import './detail.css';
import { getCar } from '../../../store/car';

export default function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReserve = (car) => {
    dispatch(getCar(car));
    navigate('/rent_form');
  };

  const Car = useSelector((state) => state.detail);
  return (
    <div className="dit">

      <h1>{Car.name}</h1>
      <div className="detail-container">
        <img className="detail-image" src={Car.photo} alt={Car.name} />
        <div className="detail-about" />
      </div>
      <table className="detail">
        <tbody>
          <tr>
            <td>Car's Name:</td>
            <td>
              {Car.name}
              {' '}
            </td>
          </tr>
          <tr>
            <td>Car's Model:</td>
            <td>{Car.model}</td>
          </tr>
          <tr>
            <td>Car's Feature:</td>
            <td>{Car.feature}</td>
          </tr>
        </tbody>
      </table>
      <div className="buttons">
        <button buttontype="reserve" onClick={() => handleReserve(Car)}>Reserve</button>
        <Link to="/" className="prev">
          <AiFillCaretLeft className="back-arrow" />
        </Link>
      </div>
    </div>
  );
}
