import * as TYPE from '../type'

const INITIAL_STATE = {
  list:[],
  loading: false,
  error: null
};

export default mReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE.SET_NEWS_LIST_STARTED:
      return {
        ...state,
        loading: true
      }
    case TYPE.SET_NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list: action.payload
      }
    case TYPE.SET_NEWS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
};