import * as TYPE from '../type';
import Resource from '../../network/api/Resources'

export const setNewsCategoryList = () => {
  return dispatch => {
    dispatch(onStarted());

    Resource.getCategories().then((data) => {
      console.log(data)
      let result = []

      data.map((d) => {
        result.push({
          name: d.name,
          slug: d.slug
        })
      })

      if(result.length > 0)
        dispatch(onSuccess(result));
      else
        dispatch(onFailure("Data not found"));
    }).catch((err) => {
      dispatch(onFailure(err));
    })
  };
}

const onStarted = () => ({
  type: TYPE.SET_NEWS_CATEGORY_LIST_STARTED
});

const onSuccess = data => ({
  type: TYPE.SET_NEWS_CATEGORY_LIST_SUCCESS,
  payload: data
});

const onFailure = error => ({
  type: TYPE.SET_NEWS_CATEGORY_LIST_FAILURE,
  payload: {
    error
  }
});