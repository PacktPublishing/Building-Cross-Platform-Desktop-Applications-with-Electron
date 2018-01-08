import React, { Component } from 'react';
import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';

export default class extends Component {

  constructor() {
    super();
    this.state = {
      selected: 'Item 1'
    }
  }

  render() {
    return (
      <NavPane openLength={200} push color={this.props.color} theme={this.props.theme}>
        {this.renderItem('Item 1', 'Content 1')}
        {this.renderItem('Item 2', 'Content 2')}
        {this.renderItem('Item 3', 'Content 3')}
      </NavPane>
    );
  }

  renderItem(title, content) {
    return (
      <NavPaneItem
        title={title}
        theme="light"
        background="#ffffff"
        selected={this.state.selected === title}
        onSelect={() => this.setState({ selected: title })}
        padding="10px 20px"
        push
      >
        <Text>{content}</Text>
      </NavPaneItem>
    );
  }
}