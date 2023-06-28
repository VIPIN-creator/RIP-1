import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import App from './components/App';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
    );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render((
<Provider store={store} >
    <App/>
</Provider>
),document.querySelector('#root'));
