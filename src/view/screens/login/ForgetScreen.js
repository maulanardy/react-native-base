import React, { Component } from 'react'
import {Image, StyleSheet, TextInput, TouchableOpacity, Dimensions} from 'react-native'
import {SafeAreaView, FlatList} from 'react-native'
import { Container, Text, Content, View, Button, Tab, Tabs, ScrollableTab} from 'native-base';
import BaseComponent from '../../../component/BaseComponent'
import MInput from '../../../component/MInput'

export default class ForgetScreen extends BaseComponent {
  constructor(props){
    super(props);

    this.idle = true

    this.state = {
      name: ""
    }
  }

  render() {
    let {navigation} = this.props
    return (
      <Container>
        <Content style={{...this.styles.main.content}}>
          <SafeAreaView style={{flex:1, height: Dimensions.get("screen").height}}>
            <View style={{flex:1}}>
              <Image style={{width:120, height: 50, resizeMode:"contain", marginTop: 80, alignSelf: "center"}} source={require("../../../assets/images/logo.png")} />
              <View style={{marginTop:40}}>
                <MInput 
                  type="email" 
                  placeholder="Email" 
                  inputBlock={{marginHorizontal: 24, margintop: 80}} 
                  onChangeText={(v) => this.mSetState({email: v})} 
                  value={this.state.email}/>
              </View>
              <this.common.TextActionButton label="FORGET PASSWORD" style={{marginTop: 30}} onPress={() => {}}/>
            </View>
            <View style={{flexDirection: "row", justifyContent: "center"}}>
              <this.common.MText style={{fontSize: 16}}>Already have an Account? </this.common.MText><TouchableOpacity onPress={() => navigation.navigate("Login")}><this.common.MText style={{fontSize: 16, fontWeight: "bold"}}>Login</this.common.MText></TouchableOpacity>
            </View>
          </SafeAreaView>
        </Content>
      </Container>
    )
  }
}


