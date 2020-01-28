import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignIn";
import SignedOutLinks from "./SignOut";
import { connect } from "react-redux";

const Navbar = ({ auth, profile }) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          <span>Mario</span> Stories
        </Link>
        {auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
