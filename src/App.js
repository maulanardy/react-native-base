import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createRootNavigator, DrawerNavigator} from './routes/MainRoute';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      auth: false,
      authChecked: false,
    };
  }

  componentWillMount(){
    // OneSignalManager.init();
    
    // OneSignal.addEventListener('received', this.onReceived);
    // OneSignal.addEventListener('opened', this.onOpened);
    // OneSignal.addEventListener('ids', this.onIds);
  }

  componentDidMount() {
    console.disableYellowBox = true;
    
    this._mounted = true;

    // setTimeout(
    //   function() {
    //     try{
    //       SplashScreen.hide();
    //     }catch(err){
    //       console.log("SplashScreen not available")
    //     }
    //   }
    //   .bind(this),
    //   3000
    // );

    // Auth.isSignedIn()
    //   .then(res => {
    //     this._mounted && this.setState({ auth: res, authChecked: true })
    //   })
    //   .catch(err => Alert.alert("An error occurred"));
  }

  componentWillUnmount() {
    this._mounted = false;

    // OneSignal.removeEventListener('received', this.onReceived);
    // OneSignal.removeEventListener('opened', this.onOpened);
    // OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    const { auth, authChecked } = this.state;

    if (!authChecked) {
      // return null;
    }

    const AppContainer = createAppContainer(DrawerNavigator);

    return (
      <AppContainer />
    )
  }
}
