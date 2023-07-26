import { actionTypes } from './actionsCreators';

const initState = {
    posts: [],
    post: {},
    isFetching: false,
    error: '',
}

const postsReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_POSTS_BY_ID_REQUEST:
        case actionTypes.GET_POSTS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case actionTypes.GET_POSTS_SUCCESS:
            return {
                ...state,
                ...payload
            };
        case actionTypes.GET_POSTS_BY_ID_SUCCESS:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
};

export default postsReducer;