import { combineReducers } from 'redux';
import Registration from "./registration";
import Login from "./login";
import SentMail from "./sentMail";

const rootReducer = combineReducers({
  registration: Registration,
  login: Login,
  sentMail: SentMail
})

export default rootReducer;
