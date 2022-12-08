import { useSelector, useDispatch } from "react-redux";
import {
  selectAllRents,
  getRentsError,
  getRentsStatus,
  fetchRents,
} from "../../store/rentsSlice";
import { useEffect } from "react";
import Rent from "./Rent";
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

  let content;
  if (rentsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (rentsStatus === "succeeded") {
    content = rents.map((rent, index) => <Rent key={index} rent={rent} />);
  } else if (rentsStatus === "failed") {
    content = <p>{rentsError}</p>;
  }

  return (
    <section className="section">
      <h2>Car Rents</h2>
      <AddRentForm />
      {content}
    </section>
  );
};

export default RentsShow;
