import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const isProd = process.env.NODE_ENV === 'production';
const middlewareList = [
    thunk
];
const enhancerList = [];

if (!isProd) {
    // Dynamic import development dependencies
    import('redux-logger').then(({ createLogger }) =>
        middlewareList.push(createLogger()));
    import('redux-immutable-state-invariant').then(reduxImmutable =>
        middlewareList.push(reduxImmutable.default()));

    if (
        typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ) {
        enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
    }
}

export default compose(
    applyMiddleware(...middlewareList),
    ...enhancerList
);