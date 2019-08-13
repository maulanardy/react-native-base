import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { MText } from './Common';

export default class MRadio extends Component {
  render() {
    return (
      <View style={{...this.props.style}}>
      <MText style={{...this.props.labelStyle}}>{this.props.label}</MText>
      <RadioForm
        formHorizontal={true}
        animation={true}
      >
        {this.props.opt.map((obj, i) => {
          return (
            <View style={{marginRight:20}} key={i}>
            <RadioButton labelHorizontal={true} key={i} >
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={this.props.value === obj.value}
                onPress={(val) => this.props.onPress(val)}
                borderWidth={1}
                buttonInnerColor={'#000'}
                buttonOuterColor={this.props.value === obj.value ? '#000' : '#444'}
                buttonSize={9}
                buttonOuterSize={15}
                buttonStyle={{marginTop:3, marginRight:2}}
                buttonWrapStyle={{}}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelHorizontal={false}
                onPress={() => {}}
                labelStyle={{fontSize: 16, color: this.props.value === obj.value ? '#444' : '#444'}}
                labelWrapStyle={{}}
              />
            </RadioButton>
            </View>
          )
        })}
      </RadioForm>
      </View>
    )
  }
}
