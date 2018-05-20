import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './app/App';
import appReducer from './app/App.reducer';
import homeReducer from './home/Home.reducer';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);

const reducers = combineReducers({
    app: appReducer,
    home: homeReducer
});

const store = createStore(
    reducers,
    enhancer
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
