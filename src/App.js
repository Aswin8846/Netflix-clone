import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import ProfileScreen from './screens/ProfileScreen';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout());
      }
    });

    // Cleanup subscription when component unmounts
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/login" 
            element={!user ? <Login /> : <Navigate to="/" />} 
          />
          <Route 
            path="/profile" 
            element={user ? <ProfileScreen /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/" 
            element={user ? <HomeScreen /> : <Navigate to="/login" />} 
          />
          <Route 
            path="*" 
            element={<Navigate to="/" />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
