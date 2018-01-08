import React, { Component } from 'react';
import { SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';

import ListView from './ListView';
import NavPane from './NavPane';
import Window from './Window'

export default class extends Component {
  constructor() {
    super();
    this.state = { selected: 1 }
  }

  render() {
    return (
      <SegmentedControl box>
        {this.renderItems()}
      </SegmentedControl>
    );
  }

  renderItems() {
    return [
      <SegmentedControlItem
        key={0}
        title="Window"
        selected={this.state.selected === 1}
        onSelect={() => this.setState({ selected: 1 })}>
        <Window />
      </SegmentedControlItem>,
      <SegmentedControlItem
        key={1}
        title="Nav Pane"
        selected={this.state.selected === 2}
        onSelect={() => this.setState({ selected: 2 })}>
        <NavPane color='#cc7f29' theme='light' />
      </SegmentedControlItem>,
      <SegmentedControlItem
        key={2}
        title="List View"
        selected={this.state.selected === 3}
        onSelect={() => this.setState({ selected: 3 })}>
        <ListView />
      </SegmentedControlItem>
    ];
  }
}