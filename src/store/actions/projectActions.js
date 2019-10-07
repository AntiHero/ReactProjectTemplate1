export const createProject = (project) => {
  return async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    await firestore.collection('projects').add({
      ...project,
      authorFirstName: "Aleksandr",
      authorLastName: "Schemelev",
      authorId: 123,
      createdAt: new Date(),
    })

    await  dispatch({
      type: 'CREATE_PROJECT',
      project
    });

    await (() => {
      console.log('here2')
      dispatch({
        type: 'CLEAR_FORM',
        clear: true,
      })
    })()
    // .then(() => {
    //   dispatch({
    //     type: 'CREATE_PROJECT',
    //     project
    //   })
    // }).then(() => {
    //   console.log('here2')
    //   dispatch({
    //     type: 'CLEAR_FORM',
    //     clear: true,
    //   })
    // })
    // .catch(error => console.log(error));
    /* Async call to db */
   
  }
};