import axios from 'axios';

const URL = 'http://localhost:3000/api/v1';

const initialState = {
  name: 'user',
  loggedIn: false,
  userId: '',
  signedUp: false,
};

const SIGN_UP = 'SIGN_UP';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

export const signUp = (payload) => ({
  type: SIGN_UP,
  payload,
});

export const logIn = (payload) => ({
  type: LOG_IN,
  payload,
});

export const logOut = () => ({
  type: LOG_OUT,
  payload: {
    name: '',
    loggedIn: false,
    userId: '',
    signedUp: false,
  },
});

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case SIGN_UP:
    return {
      ...action.payload,
    };
  case LOG_IN:
    return action.payload;

  case LOG_OUT:
    return action.payload;
  default:
    return state;
  }
};

export const signUpDetails = (details) => async (dispatch) => {
  const { email, password } = details;
  try {
    await axios.post(`${URL}/signup`, {
      email,
      password,
    });
    dispatch(signUp(
      {
        name: email,
        loggedIn: false,
        userId: '',
        signedUp: true,
      },
    ));
  } catch (error) {
    dispatch(signUp(
      {
        name: '',
        loggedIn: false,
        userId: '',
        signedUp: 'error',
      },
    ));
  }
};

export const signinDetails = (details) => async (dispatch) => {
  const { email, password } = details;
  try {
    const response = await axios.post(
      `${URL}/login`,
      {

        email,
        password,

      },
    );

    const { data } = response;
    const { user } = data;
    const upDateData = {
      name: user.email,
      loggedIn: true,
      userId: user.id,
      signedUp: true,
    };

    localStorage.setItem('user', JSON.stringify(upDateData));
    dispatch(logIn(upDateData));
  } catch (error) {
    dispatch(
      logIn({
        name: '',
        loggedIn: false,
        userId: '',
        signedUp: false,
      }),
    );
  }
};
 
export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  dispatch(logOut());
};

export default signinDetails;
