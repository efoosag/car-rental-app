/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signinDetails } from '../store/userSlice';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const { loggedIn } = state;
  const [signIn, setSignIn] = useState(loggedIn);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginUser = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(signinDetails(user));
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    setSignIn(loggedIn);
    if (signIn === true) {
      navigate('/houses');
    }
  }, [loggedIn, navigate, signIn, state]);
  return (
    <>
      {/* <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 ">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              method="POST"
              onSubmit={loginUser}
            >
              <div>
                <label htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter User Email..."
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter User Password..."
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </label>
              </div>
              <button type="submit">Log In</button>
              <div className="text-center">
                <p>
                  New User?
                  {' '}
                  <a href="/signup">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <section className="vh-100 gradient-custom">
        <div className="container-fluid h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 m-0">
            <div className="col-12 col-md-8">
              <form
                className=""
                method="POST"
                onSubmit={loginUser}
              >
                <div className="card text-dark border-0" style={{ borderRadius: '1rem' }}>
                  <div className="card-body p-5 text-center">

                    <div className="mb-md-5 mt-md-4 pb-5">

                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">Please enter your login and password!</p>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="email">
                          <input
                            id="email"
                            className="form-control form-control-lg ps-5"
                            type="email"
                            name="email"
                            placeholder="Enter User Email..."
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            style={{ borderRadius: '2rem' }}
                          />
                        </label>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="password">
                          <input
                            id="password"
                            className="form-control form-control-lg ps-5"
                            type="password"
                            name="password"
                            placeholder="Enter User Password..."
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            style={{ borderRadius: '2rem' }}
                          />
                        </label>
                      </div>

                      <button className="btn btn-outline-light btn-lg px-5 mt-3" type="submit" style={{ backgroundColor: '#fd7e14', borderRadius: '2rem' }}>Login</button>

                    </div>

                    <div>
                      <p className="mb-0">
                        Don't have an account?
                        {' '}
                        <a href="/signup" className="text-50 fw-bold" style={{ color: '#fd7e14' }}>Sign Up</a>
                      </p>
                    </div>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
