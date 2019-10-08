const initState = {
  // projects: [
  //   {id: '1', title: 'help me find peach', content: 'blah blah blah'},
  //   {id: '2', title: 'helm me find melon', content: 'blah blah blah'},
  //   {id: '3', title: 'help me find bear', content: 'blah blah blah'}
  // ]
};

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      return state;
    case 'CLEAR_FORM':
      return {
        ...state,
        clear: action.clear
      }
    default: return state;
  }
}

export default projectReducer;