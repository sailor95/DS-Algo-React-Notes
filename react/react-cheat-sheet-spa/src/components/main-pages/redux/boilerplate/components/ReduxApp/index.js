import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import PostList from '../PostList';
import actionCreators from '../../store/jsonPlaceholder/actionsCreators';

class ReduxApp extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Redux Boilerplate</h1>
                        <PostList
                            posts={this.props.posts.posts}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
};

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = {
    fetchPosts: actionCreators.fetchPosts,
    fetchPostById: actionCreators.fetchPostById
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp);