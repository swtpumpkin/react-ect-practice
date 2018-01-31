import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import users from 'redux/modules/users';
import { applyMiddleware } from '../../../../../Library/Caches/typescript/2.6/node_modules/redux';

const middlewares = [thunk];

const reducer = combineReducers({
  users,
});

let store = initialState => createStore(reducer, applyMiddleware(...middlewares));

export default store();
