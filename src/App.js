import React from 'react';
import Header from '../src/layouts/header';
import withHeader from './Hoc';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/index';
import Layout from './layouts';
import Login from './components/login';
import Registration from './components/registration';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/reducer/index'
const middleware = applyMiddleware(thunk)

let store = createStore(rootReducer, middleware);
class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		console.log('App this.props => ', this.props);
		return (
			<div className="App">
				<Provider store={store}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/registration" component={Registration} />
						<Route exact path="*" render={() => <h1>Page Not Found (404)</h1>} />
					</Switch>
				</Provider>
			</div>
		);
	}
}

export default withHeader(App);
