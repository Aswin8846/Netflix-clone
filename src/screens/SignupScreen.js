import React, { useRef } from 'react';
import './SignupScreen.css';
import { auth, googleProvider } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      alert(error.message);
    });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      alert(error.message);
    });
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email' />
        <input ref={passwordRef} type='password' placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign In</button>
        <button onClick={signInWithGoogle} className='signupScreen_googleButton'>
          Sign In with Google
        </button>
        <h4>
          <span className='signUpScreen_grey'>New to Netflix?</span>
          <span className='signUpScreen_link' onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;





// import React, { useRef } from 'react';
// import './SignupScreen.css';
// import { auth } from '../firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

// function SignInScreen() {
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);



//   const register = (e) => {
//     e.preventDefault();
//     auth.createUserWithEmailAndPassword(
//       emailRef.current.value,
//       passwordRef.current.value
//     ).then((authUser) =>{
//       console.log(authUser)
//     })
//     .catch((error) =>{
//       alert(error.message);
//     });
//   };

//   const signIn = (e) => {
//     e.preventDefault();
//   }

//   return (
//     <div className='signupScreen'>
//       <form>
//         <h1>Sign In</h1>
//         <input ref={emailRef} placeholder='Email' type='email' />
//         <input ref={passwordRef} type='password' placeholder='Password' />
//         <button type='submit' onClick={signIn}>Sign In</button>
//         <h4><span className='signUpScreen_grey'>New to Netflix?</span> 
//         <span className='signUpScreen_link' onClick={register}>Sign Up now.</span></h4>
//       </form>
//     </div>
//   )
// }

// export default SignInScreen;