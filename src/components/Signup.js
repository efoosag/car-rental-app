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
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              method="POST"
              onSubmit={signUpUser}
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
              <button type="submit">Sign Up</button>
              <div className="text-center">
                <p>
                  Existing User?
                  {' '}
                  <a href="login">Login</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
