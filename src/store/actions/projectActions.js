export const createProject = project => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    try {
      await firestore.collection("projects").add({
        ...project,
        authorFirstName: "Aleksandr",
        authorLastName: "Schemelev",
        authorId: 123,
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
