export const createProject = project => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {

    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    try {
      await getFirestore().collection("projects").add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      });

      await dispatch({
        type: "CREATE_PROJECT",
        project
      });

      await dispatch({
        type: "CLEAR_FORM",
        clear: true
      });
    } catch (err) {
      console.log(err);
    }
  };
};
