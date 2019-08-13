import React, { Component } from 'react'
import { SafeAreaView, Dimensions, Image, TouchableOpacity, View, ScrollView} from 'react-native'
import { Container, Text, Content, Button, Tab, Tabs, ScrollableTab} from 'native-base';
import BaseComponent, {MInput, MPicker, MRadio} from '../../../component/BaseComponent'

var gender = [
  {label: 'Male', value: "male" },
  {label: 'Female', value: "female" }
];

var year = [];

export default class RegisterScreen extends BaseComponent {
  constructor(props){
    super(props);

    this.idle = true

    for(var i = 2019; i > 1960; i--){
      year.push({
        label: i.toString(),
        value: i
      })
    }

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
            <ScrollView style={{height: Dimensions.get("screen").height}}>
              <View style={{flex:1}}>
                <this.common.MText style={{...this.styles.main.heading, marginHorizontal: 24, marginTop: 50}}>Register</this.common.MText>
                <View style={{marginTop:20}}>
                  <MInput 
                    placeholder="Full Name" 
                    inputBlock={{marginHorizontal: 24}} 
                    onChangeText={(v) => this.mSetState({name: v})} 
                    value={this.state.name}/>

                  <MInput 
                    placeholder="Email" 
                    inputBlock={{marginHorizontal: 24}} 
                    onChangeText={(v) => this.mSetState({email: v})} 
                    value={this.state.email}/>

                  <MInput 
                    type="number" 
                    placeholder="Phone Number" 
                    inputBlock={{marginHorizontal: 24}} 
                    onChangeText={(v) => this.mSetState({phone: v})} 
                    value={this.state.phone}/>

                  <MRadio 
                    style={{marginHorizontal:24, marginBottom:20}} 
                    labelStyle={{marginBottom:10, fontSize: 14}} 
                    opt={gender} 
                    label="Gender" 
                    onPress={(v) => {this.mSetState({gender:v})}} 
                    value={this.state.gender}/>

                  <MPicker 
                    style={{marginHorizontal: 24, marginBottom:20}} 
                    label="Year of Birth" 
                    opt={year} 
                    labelStyle={{marginBottom:10, fontSize: 14}} 
                    onValueChange={(v) => this.mSetState({yob: v})} 
                    value={this.state.yob} />

                  <MInput 
                    type="password" 
                    placeholder="Password" 
                    inputBlock={{marginHorizontal: 24}} 
                    onChangeText={(v) => this.mSetState({password: v})} 
                    value={this.state.password}/>

                  <MInput 
                    type="password" 
                    placeholder="Confirm Password" 
                    inputBlock={{marginHorizontal: 24}} 
                    onChangeText={(v) => this.mSetState({repassword: v})} 
                    value={this.state.repassword}/>

                  <this.common.TextActionButton 
                    label="REGISTER"
                    style={{marginTop: 30}} 
                    onPress={() => {}}/>
                </View>
              </View>
              <View style={{flexDirection: "row", marginTop: 20, justifyContent: "center"}}>
                <this.common.MText style={{fontSize: 16}}>Already have an Account? </this.common.MText><TouchableOpacity onPress={() => navigation.navigate("Login")}><this.common.MText style={{fontSize: 16, fontWeight: "bold"}}>Login</this.common.MText></TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
      </Content>
      </Container>
    )
  }
}
