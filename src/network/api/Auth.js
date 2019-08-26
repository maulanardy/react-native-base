import axios from 'axios'
import URI from '../../config/Uri'
import API from '../../config/Api'

const mAxios = axios.create({
  baseURL: URI.AUTH_API,
})

class Auth {
  async login(email, password){
    return new Promise((resolve, reject) => {
        mAxios.post(API.LOGIN, { email: email, password: password }, {
          headers: {
            "Content-Type": "application/json"
          }
        }).then(function (response){
        resolve(response.data);
      }).catch(function (error) {
        reject(error);
      });
    });
  }

  async getProfile(auth){
    return new Promise((resolve, reject) => {
        mAxios.post(API.GET_PROFILE, null, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": auth
          }
        }).then(function (response){
        resolve(response.data);
      }).catch(function (error) {
        reject(error);
      });
    });
  }

}

export default new Auth();