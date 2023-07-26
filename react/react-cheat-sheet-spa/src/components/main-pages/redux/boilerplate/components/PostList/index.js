import React from 'react';
import PropTypes from 'prop-types';

const PostList = ({ posts }) => {
    console.log("posts");
    return (
        <div>
            <h3>Post List</h3>
            <ul>
                {posts.map(p => (
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>
    );
};

PostList.propTypes = {
    posts: PropTypes.array.isRequired
};

PostList.defaultProps = {
    posts: [
        {
            id: 0,
            title: 'Failed to fetch'
        }
    ]
};

export default PostList;