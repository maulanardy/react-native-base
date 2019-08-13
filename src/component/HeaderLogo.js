import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import Menu from '../assets/images/menu.png'
import Logo from '../assets/images/logo.png'

export default HeaderLogo = (props) => (
  <Image style={{width:75, height:25, resizeMode:"contain"}} source={Logo} />
)
