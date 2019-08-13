import React from 'react'
import { Text, View, Image} from 'react-native'
import BaseComponent from '../../component/BaseComponent'

export default class NewsHighlightFragment extends BaseComponent {
  render() {
    return (
      <View>
        <Image style={{flex:1, height: 200, resizeMode:"cover"}} source={{uri: this.props.uri}} />
        <this.common.MText numberOfLines={2} style={{marginTop:-60, marginBottom: 14, marginHorizontal: 12, color: "#FFF", fontWeight: "bold", fontSize: 20}}>{this.props.title}</this.common.MText>
      </View>
    )
  }
}
