import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'

export class DefaultStatusBar extends Component {
  render() {
    return (
      <StatusBar backgroundColor='#590603' barStyle='light-content' />
    )
  }
}

export class TransparantStatusBar extends Component {
  render() {
    return (
      <StatusBar translucent={true} backgroundColor='transparent' barStyle='dark-content' />
    )
  }
}