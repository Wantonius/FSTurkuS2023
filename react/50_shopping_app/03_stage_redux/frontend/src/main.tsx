import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom';
import loginReducer from './reducers/loginReducer';
import shoppingReducer from './reducers/shoppingReducer';
import {createStore,Store,AnyAction,applyMiddleware,combineReducers} from 'redux';
import {thunk} from 'redux-thunk';
import {Provider} from 'react-redux';
import {AppState} from './types/states';

const rootReducer = combineReducers<AppState>({
	login:loginReducer,
	shopping:shoppingReducer
})

const store:Store<AppState,AnyAction> = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
  </React.StrictMode>,
)
