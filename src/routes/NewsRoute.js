import React from 'react'
import {Image} from 'react-native'
import {createStackNavigator} from 'react-navigation';

import NavigationSlideRight from '../lib/NavigationSlideRight';
import HeaderMenu from '../component/HeaderMenu'
import HeaderLogo from '../component/HeaderLogo'

import IndexScreen from '../view/screens/news/IndexScreen';
import DetailScreen from '../view/screens/news/DetailScreen';

export default createStackNavigator({
    Index:{
        screen: IndexScreen,
        navigationOptions: (props) => ({
          headerTitle: <HeaderLogo />,
          headerRight: HeaderMenu(props),
        })
    },
    Detail:{
        screen: DetailScreen,
        navigationOptions: (props) => ({
          headerTitle: <HeaderLogo />,
          headerRight: HeaderMenu(props),
        })
    },
  },
  {
    initialRouteName: "Index",
    // defaultNavigationOptions: HeaderStyle,
    transitionConfig: NavigationSlideRight
  });