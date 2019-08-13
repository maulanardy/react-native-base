import AsyncStorage from '@react-native-community/async-storage';
import Oauth from "../network/api/Oauth";
import CONST from "../config/Constants"

class Auth {
  signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      Oauth.login(email, password)
      .then((result) => {
      console.log("CSI: AUTH" + result.token)
        
        AsyncStorage.setItem(CONST.AUTH, JSON.stringify({
          ACCESS_TOKEN: result.token,
          TOKEN_TYPE: "",
          EXPIRES_IN: "",
          REFRESH_TOKEN: "",
        }));
        
        AsyncStorage.setItem(CONST.PROFILE, JSON.stringify(result.karyawan));
  
        resolve(result.karyawan);
      })
      .catch((err) => {
        reject(err)
      });
    })
  }

  refreshToken = () => {
    return new Promise((resolve, reject) => {
      this.getRefreshToken().then((refreshToken) => {
      
        Oauth.refresh(refreshToken)
        .then((result) => {

          AsyncStorage.setItem(CONST.AUTH, JSON.stringify({
            ACCESS_TOKEN: result.access_token,
            TOKEN_TYPE: result.token_type,
            EXPIRES_IN: result.expires_in.toString(),
            REFRESH_TOKEN: result.refresh_token,
          })).then(() => resolve(true)).catch((err) => reject(err))
    
        }).catch((err) => reject(err));
      }).catch((err) => reject(err));
    })
  }
  
  signOut = () => {
    return new Promise((resolve, reject) => {
      AsyncStorage.removeItem(CONST.AUTH);
      AsyncStorage.removeItem(CONST.PROFILE);
      
      resolve(true);
    })
  }
  
  isSignedIn = () => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(CONST.AUTH)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
    });
  };
  
  requestProfile = () => {
    return new Promise((resolve, reject) => {
      this.getStorage(CONST.AUTH).then((res) => {
        Oauth.profile(res.TOKEN_TYPE + " " + res.ACCESS_TOKEN)
        .then((result) => {
          console.log("MNLY: profile => " + JSON.stringify(result))
          
          AsyncStorage.setItem(CONST.PROFILE, JSON.stringify(result));
          resolve(true);
        })
        .catch((err) => reject(err));
      })
      .catch(err => reject(err));
    })
  };
  
  editProfile = (data) => {
    return new Promise((resolve, reject) => {
      this.getStorage(CONST.AUTH).then((res) => {
        Oauth.profileEdit(data, res.TOKEN_TYPE + " " + res.ACCESS_TOKEN)
        .then((result) => {
          resolve(true);
        })
        .catch((err) => reject(err));
      })
      .catch(err => reject(err));
    })
  };
  
  changePassword = (data) => {
    return new Promise((resolve, reject) => {
      this.getStorage(CONST.AUTH).then((res) => {
        Oauth.changePassword(data, res.TOKEN_TYPE + " " + res.ACCESS_TOKEN)
        .then((result) => {
          resolve(true);
        })
        .catch((msg) => {
        if(typeof(msg) !== 'string'){
            for (var key in msg) {
              if (msg.hasOwnProperty(key)) {
                reject(msg[key])
              }
            }
          } else {
            reject(msg)
          }
        });
      })
      .catch(err => reject(err));
    })
  };

  async getAuthorization(){
    const res = await this.getStorage(CONST.AUTH);

    return "Bearer " + res.ACCESS_TOKEN;
  }

  async getAccessToken(){
    const res = await this.getStorage(CONST.AUTH);

    return res.ACCESS_TOKEN;
  }

  async getRefreshToken(){
    const res = await this.getStorage(CONST.AUTH);

    return res.REFRESH_TOKEN;
  }

  getStorage(key){
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key)
      .then(res => {
        if (res !== null) {
          resolve(JSON.parse(res));
        } else {
          reject(key + " is null");
        }
      })
      .catch(err => reject(err));
    });
  }

  getMyProfile(){
    return new Promise((resolve, reject) => {
      this.getStorage(CONST.PROFILE).then((res) => {
        resolve(res);
      })
      .catch(err => reject(err));
    });
  }

  async getDivisi(){
    const res = await this.getMyProfile();

    return res.name;
  }
}

export default new Auth();