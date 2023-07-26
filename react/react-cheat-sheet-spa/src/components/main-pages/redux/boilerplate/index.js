import React from 'react';
import { Provider } from 'react-redux';

import configStore from './store/configStore';
import ReduxApp from './components/ReduxApp';

const ReduxBoilerplate = () => {
    const store = configStore({});

    if (process.env.NODE_ENV !== 'production') {
        console.log('Init state ->', store.getState());
    }

    return (
        <Provider store={store}>
            <ReduxApp />
        </Provider>
    );
}

export default ReduxBoilerplate;