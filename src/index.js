import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, combineReducers } from 'redux';  //creates store for states &&middleware betweeen actions and reducers && allows combination of multiple reducers 
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'; //middleware for async processes using dispatch(); allows functions to be passed to actions and executed in the background by sending pending to reducer
import { createLogger } from 'redux-logger';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import 'tachyons';
import './index.css';

import { searchRobots, requestRobots } from './reducers';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = 
	createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
serviceWorker.unregister();