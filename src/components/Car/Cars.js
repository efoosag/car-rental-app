/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCar } from "../../store/car";
import { getCars } from "../../store/detail";
import "./Cars.css";

const Cars = () => {
  const [initial, setInitial] = useState(0);
  const [right, setRight] = useState(true);
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getCar());
  }, [dispatch]);

  const carsTest = (arr) => arr.slice(initial, initial + 20);
  const nextCars = carsTest(cars || []);
  const chooseName = () => {
    if (right === true) {
      return "first";
    }
    return "second";
  };
  const classNaming = chooseName();
  return (
    <div className="main">
      <h1>LATEST CARS</h1>
      <p className="choose">Please select a car</p>

      <div className="middle">
        <div className="left">
          <button
            onClick={() => {
              setRight(false);
              if (initial > 0) {
                setInitial(initial - 2);
              }
            }}
            type="button"
            className="back-button"
          />
        </div>
        <ul className="car-ul">
          {nextCars.map((car) => (
            <div className={classNaming} key={car.id}>
              <Link
                to="/detail"
                className="link-to-details"
                onClick={() => {
                  dispatch(getCars(car));
                }}
              >
                <div className="card1">
                  <img className="lambo" src={car.photo} alt={car.model} />
                </div>
                <h3 className="model-name">{car.name}</h3>
                <h3 className="car-info">{car.model}</h3>
                <h3 className="car-info">{car.feature}</h3>
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
          />
        </div>
      </div>
    </div>
  );
};

export default Cars;
