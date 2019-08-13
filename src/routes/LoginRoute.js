import React, { Component } from 'react'
import {createStackNavigator} from 'react-navigation';

import LoginScreen from '../view/screens/login/LoginScreen';
import RegisterScreen from '../view/screens/login/RegisterScreen';
import ForgetScreen from '../view/screens/login/ForgetScreen';

export default createStackNavigator({
  Login:{
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
  },
  Register:{
      screen: RegisterScreen,
      navigationOptions: {
        header: null
      }
  },
  Forget:{
      screen: ForgetScreen,
      navigationOptions: {
        header: null
      }
  },
},
{
  initialRouteName: "Login"
});