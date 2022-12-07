const url = 'http://localhost:3000/api/v1/cars';
const GET_CARS = 'GET_CARS';
const POST_CARS = 'POST_CAR';

const initialState = [];

const carReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_CARS:
    return payload;
  case POST_CARS:
    return [...state, payload];
  default:
    return state;
  }
};

export default carReducer;

export const getCar = () => async (dispatch) => {
  const response = await fetch(url);
  const car = await response.json();

  dispatch({
    type: GET_CARS,
    payload: car,
  });
};

export const saveCar = (car) => async (dispatch) => {
  await fetch(url,
    {
      method: 'POST',
      body: JSON.stringify({
        name: car.name,
        model: car.model,
        photo: car.photo,
        feature: car.feature,
        user_id: car.user_id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  dispatch({
    type: POST_CARS,
    payload: car,
  });
};
