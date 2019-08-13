import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview';
import HTML from 'react-native-render-html';
import Share from 'react-native-share';
import { Container, Text, Content, View, Button, Tab, Tabs, ScrollableTab} from 'native-base';
import BaseComponent from '../../../component/BaseComponent'
import {MText, Separator} from '../../../component/Common'

export default class DetailScreen extends BaseComponent {
  render() {

    const shareOptions = {
      title: 'JFW',
      message: 'some message',
      url: 'some share url',
    };

    return (
      <Container>
        <Content>
          <View>
            <Image style={{flex:1, height: 400, resizeMode: "cover"}} source={{uri: "https://cepagram.com/wp-content/uploads/2019/07/Two-Tower-Cranes-533x261.jpg"}} />
            <View style={{flex:1, margin: 20, marginTop: -200, backgroundColor: "#FFF", borderRadius: 7, ...this.styles.main.backgroundShadow}}>
                <View style={{padding:10}}>
                  <View style={{flexDirection: "row"}}>
                    <MText numberOfLines={2} style={{fontSize:12, flex:1, letterSpacing:4, fontWeight: "bold", color: "#ed2623", marginBottom:15}}>NEWS FLASH</MText>
                    <TouchableOpacity onPress={() => Share.open(shareOptions)}>
                      <Image style={{width:20, height:20, marginEnd: 12, resizeMode: "contain"}} source={require("../../../assets/images/share.png")} />
                    </TouchableOpacity>
                  </View>
                  <MText style={{fontSize:16, fontWeight: "bold", color: "#000000"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere</MText>
                  <MText numberOfLines={2} style={{fontSize:14, color: "#505050", marginVertical:5}}>August 7, 2019</MText>
                  <Separator />
                  <HTML baseFontStyle={{fontSize:14, color: "#505050"}} html={"\n<p>Sejak penyelenggaraan pertama di tahun 2008, Jakarta Fashion Week secara konsisten menjadi biduk bagi industri mode Indonesia. Tidak hanya menjadi tuan rumah di negeri sendiri, melalui berbagai program, seperti Indonesia Fashion Forward, insan kreatif Indonesia turut diajak meramaikan panggung mode negeri-negeri seberang. Didaulat sebagai pekan mode tahunan terbesar dan paling berpengaruh di Asia Tenggara, Jakarta Fashion Week merupakan <em>platform<\/em> universal bagi pelaku industri mode yang ingin dikaitkan dengan desain, gaya, dan tren mode terkini.<\/p>\n\n\n\n<p>Dengan reputasi dan pengaruh yang sudah lama terbangun, Jakarta Fashion Week berpotensi mengantarkan industri mode Indonesia untuk memasuki pasar mode dunia. Dampak dan jangkauan Jakarta Fashion Week telah diakui oleh para profesional di industri mode, seperti jurnalis, <em>buyer, fotografer, stylist<\/em>, bahkan model-model internasional yang menjadikan acara tahunan ini semakin populer. u. Dengan sokongan berbagai <em>stakeholder<\/em>, yang mungkin punya kepentingan berbeda, namun karya yang dihasilkan punya tujuan yang sama, memajukan industri mode, terutama industri nasional. Juga banyak keterlibatan partner asing, namun bukan untuk mengintimidasi, melainkan saling menginspirasi. <\/p>\n"} />
                </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
