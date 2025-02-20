import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }else{
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar)
    },[]);


  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className='nav_contents'>
            <img onClick={()=> navigate("/")} className='nav_logo' src='https://shorturl.at/ZxeiY' alt='' />
            <img onClick={()=> navigate("/profile")} className='nav_avatar' src='https://shorturl.at/iXloC' alt='' />
        </div>
        </div>
  )
}

export default Nav