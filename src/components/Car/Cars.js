import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCar } from '../../store/car';
import Car from './Car';
import './Cars.css';

function Cars() {
  const dispatch = useDispatch();

  const retrieveCars = () => {
    dispatch(getCar());
  };
  const cars = useSelector((state) => state.cars);
  useEffect(() => {
    retrieveCars();
  }, []);

  return (
    <div className="car-hole">
      <div>
        <h1 className="car-title">Cars List</h1>
        <p className="car-paragraph">Please select a Cars</p>
        <p className="dashes">----------------------------</p>
      </div>
      {
        cars?.map((car) => (<Car key={car.id} car={car} />))
      }
    </div>
  );
}

export default Cars;
