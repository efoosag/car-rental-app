const GET_CAR = 'GET_CAR';

const initialState = [];

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_CAR:
    return action.car;
  default:
    return state;
  }
};

export default detailReducer;

export const getCars = (car) => {
  localStorage.setItem('cars', JSON.stringify(car));
  return {
    type: GET_CAR,
    car,
  };
};
