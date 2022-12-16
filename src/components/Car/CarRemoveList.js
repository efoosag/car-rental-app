/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { getCar, deleteCar } from '../../store/car';
import './CarRemoveList.css';

const CarRemoveList = () => {
  const dispatch = useDispatch();
  const retrieveCars = () => {
    dispatch(getCar());
  };
  const cars = useSelector((state) => state.cars);

  useEffect(() => {
    retrieveCars();
  }, []);

  return (
    <div className="main">
      <h1>Remove cars from list</h1>

      <div className="res-contain remove-container mt-4">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="contain">Name</th>
              <th scope="col" className="contain">Model</th>
              <th scope="col" className="contain">Action</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id} className="lines">
                <td>{car.name}</td>
                <td>{car.model}</td>
                <th scope="col">
                  <button
                    className="remove-btn px-3"
                    type="submit"
                    onClick={() => dispatch(deleteCar(car.id))(
                      window.location.reload(false),
                    )}
                  >
                    <FontAwesomeIcon icon={faTrash} className="trashcan px-2" />
                    remove
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default CarRemoveList;
