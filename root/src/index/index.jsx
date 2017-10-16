import React, { Component } from 'react';
import { connect } from 'dva';
import './style.scss';

class Index extends Component {
  render() {
    return (
      <div className="dl-index">
        2222
      </div>
    );
  }
}

function mapStateToProps({ routing }) {
  return {
    pathname: routing.locationBeforeTransitions.pathname,
  };
}

export default connect(mapStateToProps)(Index);
