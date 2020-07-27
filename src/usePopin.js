const initialState = {isShowing: false};

function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return {isShowing: !state.isShowing};
    default:
      throw new Error();
  }
}

export default  {
    initialState,
    reducer
}