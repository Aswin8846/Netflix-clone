import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Nav from '../Nav';
import './ProfileScreen.css';
import PlanScreen from './PlanScreen';
import { auth } from '../firebase';

function ProfileScreen() {

    const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
        <Nav/>
        <div className='profileScreen_body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen_info'>
                <img src='https://shorturl.at/iXloC' alt='' />
                <div className='profileScreen_details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen_plans'>
                        <h3>Plans</h3>
                        <PlanScreen />
                        <button onClick={() => auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen;