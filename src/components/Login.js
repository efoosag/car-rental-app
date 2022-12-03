import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signinDetails } from '../store/userSlice';

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
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
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
      </div>
    </>
  );
}

export default Login;
