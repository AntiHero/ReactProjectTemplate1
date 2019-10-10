const initState = {};

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