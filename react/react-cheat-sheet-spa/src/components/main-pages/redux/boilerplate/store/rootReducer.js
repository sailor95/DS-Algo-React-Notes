import { combineReducers } from 'redux';

import app from './app/reducer';
import posts from './jsonPlaceholder/reducer';

const rootReducer = combineReducers({
    app,
    posts
});

export default rootReducer;