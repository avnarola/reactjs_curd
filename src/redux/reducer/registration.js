const initialState = {

};
const registreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTRATION_START':
      return { ...state, error_catalogue: false, error_msg: '', loading: true };
    default:
      return state;
  }
}

export default registreReducer
