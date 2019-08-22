import { combineReducers } from 'redux';
import NewsReducer from './NewsReducer'
import NewsCategoryReducer from './NewsCategoryReducer'


export default combineReducers({
  news: NewsReducer,
  newsCategory: NewsCategoryReducer
});