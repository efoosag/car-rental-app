import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpDetails } from '../store/userSlice';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const { signedUp } = state;
  const [signUp, setSignUp] = useState(signedUp);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signUpUser = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(signUpDetails(user));
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    setSignUp(signedUp);
    if (signUp === true) {
      navigate('/login');
    }
  }, [navigate, signUp, signedUp]);
  return (
    <>
      <div className="container-fluid h-100vh mt-5 mt-md-0">
        <div className="row d-flex justify-content-center align-items-center h-100 m-0">
          <div className="col-12 col-md-8">
            <form
              className=""
              method="POST"
              onSubmit={signUpUser}
            >
              <div className="card text-dark border-0" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-5 mt-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                    <p className="text-dark-50 mb-5">Please enter your login and password!</p>

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

                    <button className="btn btn-outline-light btn-lg px-5 mt-3" type="submit" style={{ backgroundColor: '#fd7e14', borderRadius: '2rem' }}>Sign Up</button>

                  </div>

                  <div>
                    <p className="mb-0">
                      Existing User?
                      {' '}
                      <a href="/login" className="text-50 fw-bold" style={{ color: '#fd7e14' }}>Login</a>
                    </p>
                  </div>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
