import { batch } from 'react-redux';

import jsonPlaceholderApi from '../../services/jsonPlaceholderApi';

export const actionTypes = {
    GET_POSTS_REQUEST: 'GET_POSTS_REQUEST',
    GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
    GET_POSTS_FAILURE: 'GET_POSTS_FAILURE',
    GET_POSTS_BY_ID_REQUEST: 'GET_POSTS_REQUEST',
    GET_POSTS_BY_ID_SUCCESS: 'GET_POSTS_SUCCESS',
    GET_POSTS_BY_ID_FAILURE: 'GET_POSTS_FAILURE'
};

const actionCreators = {
    fetchPosts: () => async dispatch => {
        try {
            const response = await jsonPlaceholderApi.getPosts();
            batch(() => {
                dispatch({ type: actionTypes.GET_POSTS_REQUEST });
                dispatch({
                    type: actionTypes.GET_POSTS_SUCCESS,
                    payload: { posts: response }
                });
            });
        } catch (e) {
            dispatch({
                type: actionTypes.GET_POSTS_FAILURE,
                payload: {
                    error: e
                }
            });
        }
    },
    fetchPostById: ({ id }) => async dispatch => {
        dispatch({
            type: actionTypes.GET_POSTS_BY_ID_REQUEST,
        });

        try {
            const response = await jsonPlaceholderApi.getPostById(id);
            dispatch({
                type: actionTypes.GET_POSTS_BY_ID_SUCCESS,
                payload: {
                    post: response
                }
            });
        } catch (e) {
            dispatch({
                type: actionTypes.GET_POSTS_BY_ID_FAILURE,
                payload: {
                    error: e
                }
            });
        }
    }
}

export default actionCreators;