import React, { Component } from 'react'
import { Text, View, Modal, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'

export default class MModal extends Component {
  render() {
    return (
      <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.visible}>
          <TouchableWithoutFeedback onPress={this.props.onClose}>
            <View style={{padding:10, flex:1, justifyContent:"center", backgroundColor:"rgba(52, 52, 52, 0.8)"}}>
              <TouchableWithoutFeedback>
                <View style={{borderRadius:5, marginHorizontal:20, padding:10, backgroundColor:"#FDFDFD",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 3,
                  ...this.props.style
                  }}>
                  <TouchableOpacity style={{alignSelf: "flex-end"}} onPress={this.props.onClose}>                  
                    <Image style={{tintColor: "#000", width: 25, height: 25, ...this.props.btnCloseStyle}} source={require("../assets/images/close.png")} />
                  </TouchableOpacity>
                    {this.props.children}
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
    )
  }
}
