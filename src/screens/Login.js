import React, { useState } from 'react';
import SignInScreen from './SignupScreen';
import './Login.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { login } from '../features/userSlice';

function Login() {
  const [signIn, setSignIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        dispatch(login({
          uid: result.user.uid,
          email: result.user.email,
        }));
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login_background'>
        <img className='login_logo' src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png' alt='' />
        <button onClick={() => setSignIn(true)} className='login_button'>
          Sign In
        </button>
        <div className='login_gradient'/>
      </div>
      <div className='login_body'>
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='login_input'>
              <form>
                <input type="email" placeholder='Email Address' />
                <button onClick={() => setSignIn(true)} className='login_getStarted'>GET STARTED</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
