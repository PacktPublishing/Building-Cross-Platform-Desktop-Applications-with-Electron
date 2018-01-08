import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/macOs';
export default class extends Component {

  render() {
    return <Window
      chrome
      height="300px"
      width="250px"
      padding="10px">
      <TitleBar controls />
      <Text>Hello World</Text>
    </Window>
  }

}