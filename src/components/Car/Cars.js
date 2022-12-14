/* eslint-disable react-hooks/exhaustive-deps */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getCar } from '../../store/car';
import { getCars } from '../../store/detail';
import "./Cars.css";

const Cars = () => {
  const [initial, setInitial] = useState(0);
  const [right, setRight] = useState(true);
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getCar());
  }, [dispatch]);

  const carsTest = (arr) => arr.slice(initial, initial + 3);
  const nextCars = carsTest(cars || []);
  const chooseName = () => {
    if (right === true) {
      return 'first';
    }
    return 'second';
  };
  const classNaming = chooseName();
  return (
    <div className="main">
      <h1>LATEST MODELS</h1>
      <p className="choose">Please select a Lambo Model</p>

      <div className="middle">
        <div className="left">
          <button
            onClick={() => {
              setRight(false);
              if (initial > 0) {
                setInitial(initial - 3);
              }
            }}
            type="button"
            className="back-button"
          >
            <FontAwesomeIcon icon="fa-solid fa-caret-left" />
          </button>
        </div>
        <ul className="car-ul">
          {nextCars.map((car) => (
            <div className={classNaming} key={car.id}>
              <Link
                to="/detail"
                className="to-deatils-link"
                onClick={() => {
                  dispatch(getCars(car));
                }}
              >
                <div className="card1">
                  <img className="lambo" src={car.photo} alt={car.model} />
                </div>
                <h3 className="model-name">{car.name}</h3>
                <p className="model-name">{car.model}</p>
                <p className="lambo-info">{car.feature}</p>

              </Link>

            </div>
          ))}
        </ul>
        <div className="right">
          <button
            onClick={() => {
              setRight(true);

              if (initial <= cars.length - 3) {
                setInitial(initial + 3);
              }
            }}
            type="button"
            className="next-button"
          >
            <FontAwesomeIcon icon="fa-solid fa-caret-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cars;
