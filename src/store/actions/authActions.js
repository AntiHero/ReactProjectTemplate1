export const signIn = credentials => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);

      await dispatch({ type: 'LOGIN_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'LOGIN_ERROR' }, err);
    }
  };
};

export const signOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    try {
      await firebase.auth().signOut();
      await dispatch({ type: 'SIGNOUT_SUCCESS' });
    } catch (err) {
      console.log(err);
    }
  };
};

export const singUp = user => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(response => {
        return firestore
          .collection('users')
          .doc(response.user.uid)
          .set({
            firstName: user.firstName,
            lastName: user.lastName,
            initials: user.firstName[0] + user.lastName[0],
          });
      })
      .then(() => {
        dispatch({ type: 'SINGUP_SUCCESS' });
      })
      .catch(error => {
        dispatch({ type: 'SIGNUP_ERROR', data: error });
      });
  };
};
