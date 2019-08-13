import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput} from 'react-native'
import * as Styles from '../assets/styles/BaseStyle'
import { MText } from './Common';

export const TYPE_PASSWORD = "password"
export const TYPE_NUMBER = "number"
export const TYPE_EMAIL = "email"
   
export default class MInput extends Component {
  constructor(props){
    super(props)

    this.state = {
    };
  }
  render() {
    var keyboardType
    switch (this.props.type) {
      case TYPE_NUMBER:
        keyboardType = "number-pad"
        break;
      case TYPE_EMAIL:
        keyboardType = "email-address"
        break;
      default:
          keyboardType = "default"
        break;
    }
    return (
      <View style={{...this.mStyles.inputBlock, ...this.props.inputBlock}}>
        <View style={{flex:1, flexDirection:"column"}}>
          <MText style={{...this.mStyles.inputLabel, ...this.props.inputLabel, opacity: this.props.value ? 1 : 0}}>{this.props.placeholder}</MText>
          <TextInput
            style={{...this.mStyles.inputView, ...this.props.inputView}}
            placeholderTextColor = "#AAAAAA"
            padding={0}
            keyboardType={keyboardType}
            secureTextEntry={this.props.type == TYPE_PASSWORD}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder={this.props.placeholder}
            onChangeText={(value) => this.props.onChangeText(value)}
            value={this.props.value}
            />
        </View>
      </View>
    )
  }

  mStyles = StyleSheet.create({
    inputBlock: {
      flexDirection: "row", 
      alignItems:"center", 
      marginBottom: 20,
      marginHorizontal: 12
    },
    inputIcon: {
      width:40, 
      height:20, 
      marginTop:10,
      resizeMode:"contain", 
      alignSelf:"center"
    },
    inputLabel:{
      // ...typography.fontLight,
      fontSize:Styles.param.size_normal,
      color: "#000000",
      marginBottom: 5
    },
    inputView: {
      textAlign: "left",
      marginStart:0,
      marginEnd:0,
      flex:0,
      height: 40,
      paddingStart:0,
      paddingBottom: 5,
      borderBottomColor: "#CCC",
      borderBottomWidth: 1,
      fontSize: Styles.param.size_normal,
      color: "#666"
    }
  });
}
