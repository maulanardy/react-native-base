import AsyncStorage from '@react-native-community/async-storage';

import OneSignal from 'react-native-onesignal';
import Oauth from "../network/api/Oauth";
import CONST from "../config/Constants"
import KEY from "../config/Key"
import Auth from '../lib/Auth'

const TAG_EMAIL = "email";
const TAG_DIVISI = "divisi";
const TAG_ROLE = "role";
const KARYAWAN_ROLE = "karyawan";

class OneSignalManager {
  init(){
    console.log("MNLY: onesignalmanager init")
    OneSignal.init(KEY.ONESIGNAL_APP_ID, {kOSSettingsKeyAutoPrompt : true});
    this.sendTags();
  }

  sendTags(email, divisi){
    console.log("MNLY: sendtags" + email)
    OneSignal.sendTags({
      email: email, 
      divisi: divisi, 
      role: KARYAWAN_ROLE
    });
  }

  deleteTags(){
    OneSignal.deleteTag(TAG_EMAIL);
    OneSignal.deleteTag(TAG_DIVISI);
    OneSignal.deleteTag(TAG_ROLE);
  }
}

export default new OneSignalManager();