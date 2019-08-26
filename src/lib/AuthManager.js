import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-community/async-storage';
import Auth from "../network/api/Auth";

export const KEY_AUTH = "KEY_AUTH"
export const KEY_PROFILE = "KEY_PROFILE"

class AuthManager {
  signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      Auth.login(email, password).then(async (result) => {
        // console.log(result)

        await Keychain.setGenericPassword( KEY_AUTH, JSON.stringify(result) );
        
        // AsyncStorage.setItem(CONST.AUTH, JSON.stringify({
        //   ACCESS_TOKEN: result.token,
        //   TOKEN_TYPE: "",
        //   EXPIRES_IN: "",
        //   REFRESH_TOKEN: "",
        // }));
  
        resolve(result.token);
      })
      .catch((err) => {
        reject(err)
      });
    })
  }
  
  signOut = () => {
    return new Promise((resolve, reject) => {
      try {
        Keychain.resetGenericPassword();
        AsyncStorage.removeItem(KEY_PROFILE);

        resolve(true);
      } catch (err) {
        reject(err)
      }
    })
  }

  refreshToken = () => {
    return new Promise((resolve, reject) => {
      this.getRefreshToken().then((refreshToken) => {
      
        // Oauth.refresh(refreshToken)
        // .then((result) => {

        //   AsyncStorage.setItem(CONST.AUTH, JSON.stringify({
        //     ACCESS_TOKEN: result.access_token,
        //     TOKEN_TYPE: result.token_type,
        //     EXPIRES_IN: result.expires_in.toString(),
        //     REFRESH_TOKEN: result.refresh_token,
        //   })).then(() => resolve(true)).catch((err) => reject(err))
    
        // }).catch((err) => reject(err));
      }).catch((err) => reject(err));
    })
  }

  requestProfile = () => {
    return new Promise((resolve, reject) => {
      Auth.getProfile(this.getAuthorization()).then(result => {
        AsyncStorage.setItem(KEY_PROFILE, JSON.stringify(result));
        resolve(true);
      }).catch(err => {
        reject(err)
      })
    })
  };

  async getAuthorization(){
    const res = await this.getKeychain();

    // return "Bearer " + res.ACCESS_TOKEN;
    return res
  }

  async getKeychain(){
    try {
      // Retrieve the credentials
      const auth = await Keychain.getGenericPassword();

      if (auth) {
        return auth.password
      } else {
        return "else"
      }
    } catch (error) {
      return error
    }
  }

}

export default new AuthManager();