import thunk from "redux-thunk";
import promise from 'redux-promise-middleware'

const middleware = applyMiddleware(thunk)

const store = createStore(
  rootReducer,
  middleware,
)

export default store
