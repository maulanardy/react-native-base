import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { MText } from './Common';

export default class MPicker extends Component {
  render() {
    return (
      <View style={{...this.props.style, borderBottomColor: "#CCC", borderBottomWidth: 1, paddingBottom: 15}}>
        <MText style={{...this.props.labelStyle, marginBottom:15}}>{this.props.label}</MText>
        <RNPickerSelect
          style={{color: "#F00"}}
          value={this.props.value}
          onValueChange={(value) => this.props.onValueChange(value)}
          items={this.props.opt}
        />
      </View>
    )
  }
}
