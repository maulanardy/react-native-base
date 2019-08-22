import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity} from 'react-native'
import BaseComponent from '../../component/BaseComponent'

export default class NewsListItem extends BaseComponent {
  render() {
    const {data} = this.props

    return (
      <View style={{flex:1, margin: 6, backgroundColor: "#FFF", borderRadius: 7, ...this.styles.main.backgroundShadow}}>
        <TouchableOpacity onPress={this.props.onItemClick}>
          <Image style={{height: 130, resizeMode: "cover"}} source={{uri: data.thumbnail}}/>
          <View style={{padding:10}}>
            <this.common.MText numberOfLines={2} style={{fontSize:10, letterSpacing:4, fontWeight: "bold", color: "#ed2623", marginBottom:5}}>{data.category.toUpperCase()}</this.common.MText>
            <this.common.MText numberOfLines={2} style={{fontSize:10, color: "#505050", marginBottom:5}}>{this.moment(data.date).format("LL")}</this.common.MText>
            <this.common.MText numberOfLines={2} style={{fontSize:12, fontWeight: "bold", color: "#505050"}}>{data.title}</this.common.MText>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
