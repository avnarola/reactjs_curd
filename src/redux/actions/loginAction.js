import axios from 'axios';
import { HOST_URL } from '../../config/constant';

export const authLogin = (data) => {
  return dispatch => {
    axios.post(HOST_URL + '/authenticate', data)
      .then(resp => {
        localStorage.setItem("user", resp.data && resp.data.data && resp.data.data.email)
        localStorage.setItem("token", resp.data && resp.data.token)
        return dispatch({
          type: 'LOGIN_SUCCESS',
          resp: resp.data
        })
      })
      .catch(err => {
        if (err) {
          return dispatch({
            type: 'LOGIN_FAIL',
            resp: err
          })
        }
        else {
          return dispatch({
            type: 'LOGIN_FAIL',
            resp: "something went wrong"
          })
        }
      })
  }
}

export const sendMailFun = (data) => {
  return dispatch => {
    axios.post(HOST_URL + '/sendMail', data)
      .then(resp => {
        return dispatch({
          type: 'MAIL_SENT_SUCCESS',
          resp: resp.data
        })
      })
      .catch(err => {
        if (err) {
          return dispatch({
            type: 'MAIL_SENT_FAIL',
            resp: err
          })
        }
        else {
          return dispatch({
            type: 'MAIL_SENT_FAIL',
            resp: "something went wrong"
          })
        }
      })
  }
}
// export const loginUser = (data) => {
//   return axios.post('http://localhost:5000/authenticate', data)
//     .then((res) => {
//       //console.log('res => ', res);
//       if (res.data && res.data.token) {
//         localStorage.setItem("user", res.data && res.data.data && res.data.data.email)
//         localStorage.setItem("token", res.data && res.data.data && res.data.data.email)
//       }
//       return res && res.data
//     })
//     .catch(err => {
//       console.error(err);
//       alert('Error logging in please try again');
//     });
// }
