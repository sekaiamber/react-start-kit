import React, { Component } from 'react';
import { connect } from 'dva';
import './style.scss';


class Header extends Component {
  constructor() {
    super();
    this.state = {
      test: {},
    };
  }
  render() {
    return (
      <header>
        <div className="dl-header">
          111
        </div>
      </header>
    );
  }
}

function mapStateToProps({ routing }) {
  return {
    pathname: routing.locationBeforeTransitions.pathname,
  };
}

export default connect(mapStateToProps)(Header);
