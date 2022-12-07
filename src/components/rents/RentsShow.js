import { useSelector, useDispatch } from "react-redux";
import {
  selectAllRents,
  getRentsError,
  getRentsStatus,
  fetchRents,
} from "../../store/rentsSlice";
import { useEffect } from "react";
import "./RentsShow.css";

import AddRentForm from "./AddRentForm";

const RentsShow = () => {
  const dispatch = useDispatch();

  const rents = useSelector(selectAllRents);
  const rentsStatus = useSelector(getRentsStatus);
  const rentsError = useSelector(getRentsError);
  // console.log(rents)

  useEffect(() => {
    if (rentsStatus === "idle") {
      dispatch(fetchRents());
    }
  }, [rentsStatus, dispatch]);

  const renderedRents = rents.map((rent, index) => (
    <article key={index} className="rent">
      <span>Car Brand</span> <h3> {rent.car_brand}</h3>
      <span>Collection Date</span> <p> {rent.rentDate}</p>
      <span>Number of Days</span>
      <p> {rent.number_of_days}</p>
      <span>City/Location</span>
      <p> {rent.location}</p>
    </article>
  ));

  return (
    <section className="section">
      <h2>Car Rents</h2>
      <AddRentForm />
      {renderedRents}
    </section>
  );
};

export default RentsShow;
