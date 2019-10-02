import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignIn';
import SignedOutLinks from './SignOut';

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className='brand-logo'><span>Mario</span> Plan</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

export default Navbar;