import React from 'react';
import { connect } from 'react-redux';

import BaseForm from './BaseForm';

class FormContainer extends React.Component {
  onSubmit = data => {
    console.log(`Submit: ${data}`);
  }

  render() {
    return (
      <div>
        <BaseForm
          form={this.props.form}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

// mapStateToProps can have a second parameter,
// which is the props passed down from the calling (parent) component
const mapStateToProps = (state, props) => {
  return {
    form: props.formId
  }
}

export default connect(mapStateToProps)(FormContainer);