import {applyMiddleware, createStore, Store} from 'redux';
import {persistStore} from 'redux-persist';
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga';
import reducers from './reducers';

export const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
const store: Store = createStore(reducers, applyMiddleware(sagaMiddleware));

export const persisStore = persistStore(store);

export default store;
