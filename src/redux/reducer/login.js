const initialState = {
  username: "",
  password: "",
  token: null,
  error: "",
  errorStatus: false
};

const authLogin = (state = initialState, action) => {
  switch (action.type) {

    case 'LOGIN_START':
      return { ...state, error: "", errorStatus: false };

    case 'LOGIN_SUCCESS':
      console.log('action.resp => ', action.resp);

      return {
        ...state,
        username: action.resp && action.resp.data && action.resp.data.email,
        token: action.resp && action.resp.token,
        //login_data: action.resp
      }

    case 'LOGIN_FAIL':
      return {
        ...state,
        errorStatus: true,
        error: action.resp
      }
    default:
      return state;
  }
}

export default authLogin
