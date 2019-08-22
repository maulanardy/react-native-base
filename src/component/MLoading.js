import React, { Component } from 'react'
import { Text, View, ActivityIndicator, Dimensions} from 'react-native'

export default class MLoading extends Component {
  render() {
    return (
      <View style={{backgroundColor: "rgba(0,0,0,0.6)", display: this.props.visible ? "flex" : "none", position: "absolute", zIndex: 1, alignItems: "center", justifyContent: "center", height: Dimensions.get("screen").height, width: Dimensions.get("screen").width}}>
        <ActivityIndicator color="#FFF" size="large" />
      </View>
    )
  }
}
