import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Moment from 'moment/min/moment-with-locales'
import * as BaseStyle from '../assets/styles/BaseStyle'
import * as Common from '../component/Common'
import mInput from './MInput'
import mRadio from './MRadio'
import mPicker from './MPicker'
import mLoading from './MLoading'
import mModalSuccess from './MModalSuccess'
import mModalError from './MModalError'

//REDUX
import { bindActionCreators } from 'redux';
import { setNewsList } from '../redux/actions/NewsAction';
import { setNewsCategoryList } from '../redux/actions/NewsCategoryAction';

export let MInput = mInput
export let MRadio = mRadio
export let MPicker = mPicker
export let MLoading = mLoading
export let MModalSuccess = mModalSuccess
export let MModalError = mModalError

export const stateToProps = (state) => {
  const { news, newsCategory } = state
  return { news, newsCategory }
};

export const dispatchToProps = dispatch => (
  bindActionCreators({
    setNewsList,
    setNewsCategoryList
  }, dispatch)
);

export default class BaseScreen extends Component {
  styles = BaseStyle
  common = Common
  moment = Moment

  constructor(props){
    super(props)

    this.moment.locale("en")
  }

  componentDidMount(){
    this._mounted = true;
  }

  componentWillUnmount(){
    this._mounted = false;
  }

  mSetState(obj){
    this._mounted && this.setState(obj)
  }
}