import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignIn';
import SignedOutLinks from './SignOut';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth } = props;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className='brand-logo'><span>Mario</span> Plan</Link>
        {
          auth.uid ? (<SignedInLinks />) : (<SignedOutLinks />)
        }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state, 'state')
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar);