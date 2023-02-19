import React from "react";
import './App.css';
import  {NavLink }from 'react-router-dom';

const Navbar = () => {
 
  return (
    <div className="nav">
        <img
          style={{ marginTop: 5 }}
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix logo"
          width='100px'
          height='50px'
          className="logo"/>

         
         <NavLink to='/netflix' className='link'>Home</NavLink>
         <NavLink to='/movie' className='link'>Movie</NavLink>
         <NavLink to="/tv" className='link'>TV/Show</NavLink>
          </div>
          )}

export default Navbar;

