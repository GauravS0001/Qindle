import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
//import AsyncStorage from '@react-native-community/async-storage';
// import {createLogger} from 'redux-logger';
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import createSagaMiddleware from 'redux-saga';
import thunk from "redux-thunk";
import rootReducers from './reducers'; // where reducers is a object of reducers
import sagas from './sagas';

// const middleware = [];

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  thunk,
  sagaMiddleware
];

// middleware.push(sagaMiddleware);

// if (__DEV__) {
//   middleware.push(createLogger());
// }

export const store = createStore(rootReducers, applyMiddleware(...middleware));
export const persistor = persistStore(store);

const configureStore = () => {
  return {persistor, store};
};

sagaMiddleware.run(sagas);

export default configureStore;
