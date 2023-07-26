
import React, { Component, createRef } from 'react';

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.node = createRef();
  }

  handleClick = e => {
    if (this.node.current) {
      if (this.node.current.contains(e.target)) {
        return; // Do nothing when click within content
      }
      this.handleClose(); // Close popup when click outside of content
    }
  }

  handleClose = () => this.props.handleClose(); // Outer component to control the state of popup

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  render() {
    return (
      <div className={styles.popup_outer}>
        <div ref={this.node} className={styles.popup_inner}>
          {this.props.content ? this.props.content : 'loading...'}
        </div>
      </div>
    );
  }
}