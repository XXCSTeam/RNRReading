import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import App from './containers/app';
import todoApp from './reducers'

const store = createStore(todoApp);



const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default Root;



