import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';

import items from './reducers/itemsReducer';

const configStore = (initState = {}) => {
    const reducers = {
        items
    };
    const middleWares = [
        thunk
    ];
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    // In development, use the browser's Redux dev tools extension if installed
    if (isDevelopment && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
    }

    const rootReducer = combineReducers({
        ...reducers
    });

    return createStore(
        rootReducer,
        initState,
        compose(applyMiddleware(...middleWares), ...enhancers)
    );
};

export default configStore;