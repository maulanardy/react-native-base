import * as TYPE from '../type'

const INITIAL_STATE = {
  list:[{name: "News Flash"}, {name: "JFW2019"}, {name: "JFW2018"}, {name: "JFW2017"}, {name: "News Archive"}],
  loading: false,
  error: null
};

export default mReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE.SET_NEWS_CATEGORY_LIST_STARTED:
      return {
        ...state,
        loading: true
      }
    case TYPE.SET_NEWS_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list: action.payload
      }
    case TYPE.SET_NEWS_CATEGORY_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
};