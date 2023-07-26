import { createStore } from 'redux';
import reducer from './rootReducer';
import middleware from './middleware';

const configStore = initState => {
    const store = createStore(
        reducer,
        initState,
        middleware
    );
    return store;
}

export default configStore;