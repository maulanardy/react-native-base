import React, { Component } from 'react'
import { Text, View, FlatList} from 'react-native'
import NewsListItem from '../items/NewsListItem'
import BaseComponent from '../../component/BaseComponent'

export default class PeopleFragment extends BaseComponent {
  render() {
    return (
      <FlatList
        style={{minHeight: 100, margin: 6}}
        refreshing={this.props.loading}
        onRefresh={() => null}
        data={this.props.data}
        numColumns={2}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <NewsListItem onItemClick={this.props.onItemClick} data={item} />}
      />
    )
  }
}
