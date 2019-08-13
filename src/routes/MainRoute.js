import {Dimensions} from 'react-native'
import {createSwitchNavigator, createDrawerNavigator} from 'react-navigation';

import * as styles from '../assets/styles/BaseStyle'

import Drawer from '../component/Drawer'
import LoginRoute from './LoginRoute'
import NewsRoute from './NewsRoute'

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      Login: {
        screen: LoginRoute
      },
      Application: {
        screen: DrawerNavigator
      }
    },
    {
      initialRouteName: signedIn ? "Application" : "Login"
    }
  );
};

export const DrawerNavigator = createDrawerNavigator(
  {
    News: {
      screen: NewsRoute,
      title: "News"
    },
    Login: {
      screen: LoginRoute,
      title: "Login"
    },
  },
  {
    initialRouteName: "News",
    hideStatusBar: false,
    drawerBackgroundColor: 'rgba(4,4,4,1)',
    drawerPosition: "right",
    drawerWidth: Dimensions.get("screen").width - 100,
    contentComponent: Drawer,
    contentOptions: {
      activeTintColor: "#FFF",
      inactiveTintColor :'#FFF',
      activeBackgroundColor: 'rgba(255,255,255,0.1)',
      labelStyle: {...styles.typography.font, fontSize: styles.param.size_medium},
      itemStyle: {justifyContent: "center"}
    },
  }
);