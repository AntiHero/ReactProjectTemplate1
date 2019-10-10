export const signIn = (credentials) => {
  return async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    console.log('authorizing');
    try {
      await firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      );

      await dispatch({ type: 'LOGIN_SUCCESS'})
    } catch(err) {
      dispatch({type: 'LOGIN_ERROR'}, err);
    }
  }
}

export const signOut = () => {
  return async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    try {
      await firebase.auth().signOut();
      await dispatch({type: 'SIGNOUT_SUCCESS'});
    } catch(err) {
      console.log(err);
    }
  }
}