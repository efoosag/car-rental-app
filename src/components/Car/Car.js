import React from 'react';

function Car(car) {
  const {
    name, model, feature, photo,
  } = car;

  return (
    <>
      <div className="car-box">
        <img className="car-image" src={photo} alt={name} />
        <h3 className="car-name">{name}</h3>
        <h4 className="car-title">{model}</h4>
        <h4 className="car-feature">{feature}</h4>
      </div>
    </>

  );
}

export default Car;
