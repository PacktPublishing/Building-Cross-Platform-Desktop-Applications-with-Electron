'use strict'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { View, TitleBar } from 'react-desktop/macOs';

import SegmentedControl from './SegmentedControl';
import NavPane from './Navpane';
import ListView from './ListView';

import './style.css';

export default class AppComponent extends Component {
  constructor() {
    super();
    this.state = { isFullscreen: false };
  }

  render() {
    return (
      <div>
        <TitleBar
          controls
          title="Electron - React Desktop"
          isFullscreen={this.state.isFullscreen}
          onCloseClick={() => console.log('Close window')}
          onMinimizeClick={() => console.log('Minimize window')}
          onMaximizeClick={() => console.log('Mazimize window')}
          onResizeClick={() => this.setState({ isFullscreen: !this.state.isFullscreen })}
        />
        <div style={{ padding: 10 }}>
          <SegmentedControl />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<AppComponent />, document.getElementById('root'));