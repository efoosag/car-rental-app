const url = 'http://localhost:3000/api/v1';
const GET_CARS = 'GET_CARS';
const POST_CARS = 'POST_CAR';
const DELETE_CAR = 'DELETE_CAR';

const initialState = [];

const carReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_CARS:
    return payload;
  case POST_CARS:
    return [...state, payload];
  case DELETE_CAR:
    return payload;
  default:
    return state;
  }
};

export default carReducer;

export const getCar = () => async (dispatch) => {
  const response = await fetch(`${url}/get_cars`);
  const car = await response.json();

  dispatch({
    type: GET_CARS,
    payload: car,
  });
};

export const saveCar = (car) => async (dispatch) => {
  await fetch(`${url}/add_car`,
    {
      method: 'POST',
      body: JSON.stringify({
        name: car.name,
        model: car.model,
        photo: car.photo,
        feature: car.feature,

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

export const deleteCar = (id) => async (dispatch) => {
  await fetch(`${url}/cars/${id}`,
    {
      method: 'DELETE',
    });

  dispatch({
    type: DELETE_CAR,
  });
};
