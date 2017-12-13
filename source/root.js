import React from 'react';
import { Provider } from 'react-redux';
import category from './store/configureStore';
import App from './containers/app';

const store = category;



const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default Root;



