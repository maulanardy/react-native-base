import React, {Component} from 'react';
import {ScrollView, Text, View, TouchableOpacity, Image, StatusBar, Navigator, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationActions, DrawerActions, DrawerItems, StackActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {DefaultStatusBar} from '../component/StatusBar'
// import styles from '../assets/styles.';
// import Auth from '../lib/Auth'
// import OneSignalManager from '../lib/OneSignalManager';

class DrawerScreen extends Component {
  myProfile = {};

  constructor(props){
    super(props);

    this.state = {
      myProfile: {}
    }
  }

  componentDidMount(){
    this._mounted = true;
  }

  componentWillUnmount(){
    this._mounted = false;
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });

    const resetStack = StackActions.reset({
      index: 0,
      actions: [navigateAction],
    })
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render () {
    const {navigation} = this.props;
    
    return (
      <SafeAreaView>
        <DefaultStatusBar />
        <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
          <TouchableOpacity onPress={() => {navigation.closeDrawer()}}>
            <Image style={{width: 20, height: 20, marginHorizontal:30, marginVertical:10, resizeMode:"contain"}} source={require("../assets/images/close.png")} />
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView>
            <DrawerItems 
              {...this.props}
              onItemPress = {
                ( route, focused ) =>       
                {    
                  // this.props.onItemPress({ route, focused })

                  const navigateAction = NavigationActions.navigate({
                    routeName: route.route.routeName,
                  });

                  this.props.navigation.dispatch(navigateAction);
                  this.props.navigation.dispatch(DrawerActions.closeDrawer())
                }
                }/>
            <View>
              {/* <TouchableOpacity onPress={() => {
                  Auth.signOut().then(() => {
                    OneSignalManager.deleteTags()
                    navigate("Login")
                  });
                }}
              >
                <View style={{padding:15, borderTopWidth:1, borderTopColor:"#aa5451"}}>
                  <Text style={{fontWeight:"bold", color:"#FFF"}}>Sign Out</Text>
                </View>
              </TouchableOpacity> */}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

const mStyles = StyleSheet.create({
  menuItemText: {

  }
})

export default DrawerScreen
