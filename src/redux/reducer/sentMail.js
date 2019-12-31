const initialState = {
  mailData: null,
  error: "",
  errorStatus: false
};

const mailSend = (state = initialState, action) => {
  switch (action.type) {

    case 'MAIL_SENT_START':
      return { ...state, error: "", errorStatus: false };

    case 'MAIL_SENT_SUCCESS':
      // console.log('action.resp => ', action.resp);
      return {
        ...state,
        mailData: action.resp && action.resp,
      }

    case 'MAIL_SENT_FAIL':
      return {
        ...state,
        errorStatus: true,
        error: action.resp
      }
    default:
      return state;
  }
}

export default mailSend
