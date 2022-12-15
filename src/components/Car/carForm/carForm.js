import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveCar } from '../../../store/car';
import './carForm.css';

const AddCar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const gotToCars = () => {
    navigate('/cars');
  };

  const defaultFormFields = {
    name: '',
    model: '',
    feature: '',
    photo: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    name,
    model,
    feature,
    photo,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const createCar = (name, model, feature, photo) => dispatch(saveCar({
    name,
    model,
    feature,
    photo,

  }));

  const submitCar = () => {
    createCar(name, model, feature, photo);
    resetFormFields();
    gotToCars();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <div className="add-car-box">
        <h3 className="">ADD NEW CAR</h3>
        <form className="forms">
          <input type="text" name="name" className="ps-2" label="car name" onChange={handleChange} value={name} required placeholder="name" />
          <input type="text" name="model" className="ps-2" label="model" onChange={handleChange} value={model} required placeholder="model" />
          <input type="text" name="feature" className="ps-2" label="feature" onChange={handleChange} value={feature} required placeholder="feature" />
          <input type="url" name="photo" className="ps-2" label="photo" onChange={handleChange} value={photo} required placeholder="Add Link to Car photo" />
          <button type="submit" onClick={submitCar}>SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default AddCar;
