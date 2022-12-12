import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewRent } from "../../store/rentsSlice";
import { getCar } from "../../store/car";
import "./AddRentForm.css";

const AddRentForm = () => {
  const dispatch = useDispatch();

  // Retrieve the cars from the state
  const retrieveCars = () => {
    dispatch(getCar());
  };

  const cars = useSelector((state) => state.cars);

  useEffect(() => {
    retrieveCars();
  }, []);

  const carsOptions = cars.map((car) => (
    <option key={car.id} value={car.model}>
      {car.model}
    </option>
  ));

  const [car_brand, setCar_brand] = useState("");
  const [rent_date, setRentDate] = useState("");
  const [number_of_days, setNumber_of_days] = useState("");
  const [location, setLocation] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onCar_brandChanged = (e) => setCar_brand(e.target.value);
  const onRentDateChanged = (e) => setRentDate(e.target.value);
  const onNumber_of_daysChanged = (e) => setNumber_of_days(e.target.value);
  const onLocationChanged = (e) => setLocation(e.target.value);

  const canSave =
    [car_brand, rent_date, number_of_days, location].every(Boolean) &&
    addRequestStatus === "idle";

  const onCreateRent = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(
          addNewRent({
            car_brand,
            rent_date,
            number_of_days,
            location,
          })
        ).unwrap();

        setCar_brand("");
        setRentDate("");
        setNumber_of_days("");
        setLocation("");
      } catch (err) {
        console.error("failed to save the rent", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <section className="rent_form">
      <h2> Make Car Rent</h2>

      <form>
        <div>
          <label htmlFor="car_brand">
            {" "}
            Car Brand
            <select
              id="car_brand"
              name="car_brand"
              value={car_brand}
              onChange={onCar_brandChanged}
            >
              <option>Select a car model</option>
              {carsOptions}
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="rentDate">
            {" "}
            Date
            <input
              type="date"
              id="rentDate"
              name="rentDate"
              value={rent_date}
              placeholder="When to Pick up Rented Car?"
              onChange={onRentDateChanged}
            />
          </label>
        </div>
        <div>
          <label htmlFor="number_of_days">
            Days
            <input
              type="number"
              id="number_of_days"
              name="number_of_days"
              value={number_of_days}
              placeholder="How Long To have the Rented Car?"
              onChange={onNumber_of_daysChanged}
            />
          </label>
        </div>

        <div>
          <label htmlFor="location">
            Location
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              placeholder="Where to have the Rented Car?"
              onChange={onLocationChanged}
            />
          </label>
        </div>
        <button type="button" onClick={onCreateRent}>
          Rent Car
        </button>
      </form>
    </section>
  );
};

export default AddRentForm;
