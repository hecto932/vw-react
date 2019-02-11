import React, { Component } from 'react';
import { connect } from 'react-redux';

import Job from '../components/job';

class JobContainer extends Component {
  render () {
    return (
      <Job 
        info={this.props.job}
      />
    );
  }
}

function mapStateToProps (state, props) {
  return { ...state };
}

export default connect(mapStateToProps)(JobContainer);