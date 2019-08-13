import axios from 'axios'
import URI from '../../config/Uri'
import API from '../../config/Api'

const mAxios = axios.create({
  baseURL: URI.BASE_API,
})

class Resource {
  async getPeople(id){
    return new Promise((resolve, reject) => {
      mAxios.get(API.GET_PEOPLE.replace(/{(id)}/, id)).then(function (response){
        resolve(response.data);
      }).catch(function (error) {
        reject(error);
      });
    });
  }

  async getPeoples(){
    return new Promise((resolve, reject) => {
      mAxios.get(API.GET_PEOPLES).then(function (response){
        resolve(response.data);
      }).catch(function (error) {
        reject(error);
      });
    });
  }

  async getNewsList(){
    return new Promise((resolve, reject) => {
      mAxios.get(API.GET_NEWS_LIST).then(function (response){
        resolve(response.data);
      }).catch(function (error) {
        reject(error);
      });
    });
  }

  async getCategories(){
    return new Promise((resolve, reject) => {
      mAxios.get(API.GET_CATEGORIES).then(function (response){
        resolve(response.data);
      }).catch(function (error) {
        reject(error);
      });
    });
  }

  async getDesignerList(){
    return new Promise((resolve, reject) => {
      mAxios.get(API.GET_DESIGNER_LIST).then(function (response){
        resolve(response.data);
      }).catch(function (error) {
        reject(error);
      });
    });
  }

  async getScheduleList(){
    return new Promise((resolve, reject) => {
      mAxios.get(API.GET_SCHEDULE_LIST).then(function (response){
        resolve(response.data);
      }).catch(function (error) {
        reject(error);
      });
    });
  }

  async getProgramList(){
    return new Promise((resolve, reject) => {
      mAxios.get(API.GET_PROGRAM_LIST).then(function (response){
        resolve(response.data);
      }).catch(function (error) {
        reject(error);
      });
    });
  }

}

export default new Resource();