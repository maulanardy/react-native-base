import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import Menu from '../assets/images/menu.png'

export default HeaderMenu = (props) => (
  <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
    <Image style={{width:25, height:25, marginEnd:20, resizeMode:"contain"}} source={Menu} />
  </TouchableOpacity>
)
