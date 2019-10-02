const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'helm me find melon', content: 'blah blah blah'},
    {id: '3', title: 'help me find bear', content: 'blah blah blah'}
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
}

export default projectReducer;