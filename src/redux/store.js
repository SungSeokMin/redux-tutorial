import { applyMiddleware, createStore } from 'redux';
import todoApp from './modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk)));

export default store;
