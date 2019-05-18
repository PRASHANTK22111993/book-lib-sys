import React from 'react';
import { Provider, connect } from 'react-redux';

/**
 * Store Provider Component
 * @param {*} props - Object
 */
const StoreProviderComponent = (props) => {
    const { storeRef, children } = props;
    return (
        <Provider store={storeRef}>
            {children}
        </Provider>
    );
};

/**
 * Main Store Component which is used to render the React Components
 * @param {*} props - Object
 */
export const MainStoreComponent = (props) => {
    const { storeRef, children } = props;
    return (
        <StoreProviderComponent storeRef={storeRef}>
            {children}
        </StoreProviderComponent>
    );
};

/**
 * Connected Wrapper Component Used For Connecting the Component With Redux API - Child Component
 * @param {*} WrappedComponent - React Components
 * @param  {...any} args - Functions
 */
export const ConnectComponent = (WrappedComponent, ...args) => connect(...args)(WrappedComponent);