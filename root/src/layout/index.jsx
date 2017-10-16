import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import './style.scss';

import Header from './header';

export default class extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="main">
        <Header />
        <ReactCSSTransitionGroup
          component="div"
          className="page-container"
          transitionName="fade"
          transitionEnterTimeout={200}
          transitionLeave={false}
          transitionLeaveTimeout={200}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname,
            parentPointer: this,
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
