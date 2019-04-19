import React from 'react';
import { Link } from 'react-router-dom';
import fruitStand from '../assets/images/fruitstand.jpeg';

function Navbar(){
  var styledNavbar = {
    display: 'flex',
    // backgroundColor: 'lightblue',
    paddingTop: '50px',
    color: 'white',
    fontFamily: 'arial',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '400px',
    padding: '0',
    backgroundImage: 'url(' + fruitStand + ')',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    textShadow: '0px 0px 20px black',
    borderBottom: '5px black solid'
  };
  var styledHeader = {
    fontSize: '80px'
  };
  var styledLink = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '20px',
    textShadow: '0px 0px 20px black',
  };
  return (
    <div style={styledNavbar}>
      <h1 style={styledHeader}>Avery's Organics</h1>
      <span>
        <Link style={styledLink} to="/">home</Link> | <Link style={styledLink} to="/contact">contact</Link>
      </span>
    </div>
  );
}

export default Navbar;
