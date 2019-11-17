import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import './index.css';
import App from './containers/App';
//import External from './containers/external';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
//import Reducer from './store/reducer';

import CounterReducer from './store/reducers/counter';
import ResultReducer from './store/reducers/results';
import BurgerReducer from './store/reducers/burgerReducer/burgerbuilder';
import OrderReducer from './store/reducers/burgerReducer/order';
import AuthReducer from './store/reducers/burgerReducer/auth';

//axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// var myInter = axios.interceptors.request.use(request=>{
// 	console.log(request);
// 	//Edit the request config
// 	return request;
// },error =>{
// 	console.log(error);
// 	return Promise.reject(error);
// })

// axios.interceptors.request.eject(myInter);

// axios.interceptors.response.use(response=>{
// 	console.log(response);
// 	//Edit the request config
// 	return response;
// },error =>{
// 	console.log(error);
// 	return Promise.reject(error);
// });

//COMBINED REDUCER FOR COUNTER APP
// const rootReducer = combineReducers({
   // ctr:CounterReducer,
   // res:ResultReducer
// });

const composeEnhancers = process.env.NODE_ENV === 'development' ? 'REDUX' : null;  // || compose
console.log(composeEnhancers);

//COMBINED REDUCER FOR BURGERBUILDER APP
const rootReducer = combineReducers({
   burgerbuilder:BurgerReducer,
   order:OrderReducer,
   ctr:CounterReducer,
   res:ResultReducer,
   auth:AuthReducer
});

const logger = (store) =>{
 return next => {
 	return action =>{
 		console.log('[MIDDLEWARE] Dispatching', action);
 		const result =  next(action);
 		console.log('[MIDDLEWARE] next state', store.getState());
 		return result;
 	}
 }
};

const store = createStore(rootReducer,applyMiddleware(logger,thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//ReactDOM.render(<External />, document.getElementById('blogID'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
