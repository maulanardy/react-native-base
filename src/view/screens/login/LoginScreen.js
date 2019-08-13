import React, { Component } from 'react'
import {Image, StyleSheet, TextInput, TouchableOpacity, Dimensions} from 'react-native'
import {SafeAreaView, FlatList} from 'react-native'
import { Container, Text, Content, View, Button, Tab, Tabs, ScrollableTab} from 'native-base';
import BaseComponent from '../../../component/BaseComponent'
import MInput from '../../../component/MInput'

export default class LoginScreen extends BaseComponent {
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

                <MInput 
                  type="password" 
                  placeholder="Password" 
                  inputBlock={{marginHorizontal: 24, margintop: 80}} 
                  onChangeText={(v) => this.mSetState({password: v})} 
                  value={this.state.password}/>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("Forget")}><this.common.MText style={{fontSize: 14, textAlign: "right", marginEnd: 24}}>Forgot password?</this.common.MText></TouchableOpacity>
              <this.common.TextActionButton label="LOGIN" style={{marginTop: 30}} onPress={() => {}}/>
            </View>
            <View style={{flexDirection: "row", justifyContent: "center"}}>
              <this.common.MText style={{fontSize: 16}}>Don't have an Account? </this.common.MText><TouchableOpacity onPress={() => navigation.navigate("Register")}><this.common.MText style={{fontSize: 16, fontWeight: "bold"}}>Register</this.common.MText></TouchableOpacity>
            </View>
          </SafeAreaView>
        </Content>
      </Container>
    )
  }
}


