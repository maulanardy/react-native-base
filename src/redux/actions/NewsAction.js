import * as TYPE from '../type';
import Resource from '../../network/api/Resources'

export const setNewsList = () => {
  return dispatch => {
    dispatch(onStarted());

    Resource.getNewsList().then((data) => {
      let result = []

      data.map((d) => {
        result.push({
          title: d.title.rendered,
          category: d._embedded['wp:term'][0][0].name,
          excerpt: d.excerpt.rendered,
          date: d.date,
          thumbnail: d._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
        })
      })
      dispatch(onSuccess(result));
    }).catch((err) => {
      dispatch(onFailure(err));
    })
  };
}

const onStarted = () => ({
  type: TYPE.SET_NEWS_LIST_STARTED
});

const onSuccess = data => ({
  type: TYPE.SET_NEWS_LIST_SUCCESS,
  payload: data
});

const onFailure = error => ({
  type: TYPE.SET_NEWS_LIST_FAILURE,
  payload: {
    error
  }
});