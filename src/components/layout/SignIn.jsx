import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/create'>New Story</NavLink></li>
      <li><NavLink to='/' onClick={props.signOut}>Log Out</NavLink></li>
  <li><NavLink className='btn btn-floating pink lighten-1' to='/'>{props.profile.initials}</NavLink></li>
    </ul>
  )
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth
})

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {dispatch(signOut())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);