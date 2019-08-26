import React, { Component } from 'react'
import { View, Platform, TouchableHighlight, TouchableNativeFeedback, StyleSheet} from 'react-native'
import { Text } from 'native-base';
import * as BaseStyle from '../assets/styles/BaseStyle'

export const MText = (props) => (
  <Text {...props} style={[props.style, BaseStyle.typography.font]}>{props.children}</Text>
)

export const Separator = (props) => (
  <View style={{borderBottomColor: "#979797", borderBottomWidth: 1, marginVertical: 10, ...props.style}} />
)

export const ActionButton = (props) => {
  const {children, style, onPress} = props
  let colorAccent = "#666"

  let mStyle = {
    backgroundColor: "#000",
    alignItems: "center",
    padding: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
  }

  if(Platform.OS === 'android') {
    var background
    if(Platform.Version  >= 21) {
      background = TouchableNativeFeedback.Ripple(colorAccent)
    } else {
      background = TouchableNativeFeedback.SelectableBackground()
    }
    return (
      <View style={{alignItems: "center"}}>
        <TouchableNativeFeedback
          background={background}
          onPress={onPress}>
          <View style={{...mStyle, ...style}}>
          {children}
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  } else {
    return (
      <View style={{alignItems: "center"}}>
        <TouchableHighlight underlayColor={colorAccent} style={{...mStyle, ...style}} onPress={onPress}>
          {children}
        </TouchableHighlight>
      </View>
    )
  }
}

export const TextActionButton = (props) => {
  return (
    <ActionButton style={{...props.style}} onPress={props.onPress}>
      <MText style={{color: "#FFF", fontWeight: "bold", fontSize: 14}}>{props.label}</MText>
    </ActionButton>
  )
}