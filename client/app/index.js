import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../assets/styles/main.scss';
import configureStore from '../shared/appStore/store';
import * as serviceWorker from '../appconfig/serviceWorker';

/**
 * Render App With Store 
 * @param {*} store - Redux Store
 */
const renderAppWithStore = (store) => {
    ReactDOM.render(
        <App storeRef={store} />,
        document.getElementById('root'));
};

// App Init Oject
export const appInit = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        this.onDeviceReady();
    },
    onDeviceReady: function () {
        // Creating Redux Store Asynchronously
        configureStore.configureStoreAsync()
            .then((store) => {
                renderAppWithStore(store);
                // Is done for Hot Module Replacement
                if (process.env.NODE_ENV !== 'production' && module.hot) {
                    module.hot.accept('./App', () => renderAppWithStore(store));
                }
            });
    }
};

//Initialize the App With Store Data
appInit.initialize();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
