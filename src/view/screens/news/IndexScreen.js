import React, { Component, Fragment } from 'react'
import {SafeAreaView, FlatList} from 'react-native'
import { Container, Text, Content, View, Button, Tab, Tabs, ScrollableTab} from 'native-base';
import BaseComponent from '../../../component/BaseComponent'
import Resource from '../../../network/api/Resources'
import NewsListFragment from '../../fragments/NewsListFragment'
import NewsHighlightFragment from '../../fragments/NewsHighlightFragment'

export default class IndexScreen extends BaseComponent {
  constructor(props){
    super(props)

    this.state = {
      data: [],
      categories: [{name: "News Flash"}, {name: "JFW2019"}, {name: "JFW2018"}, {name: "JFW2017"}, {name: "News Archive"}],
      loading: false,
    }
  }

  componentWillMount(){
    this.getCategories();
  }

  componentDidMount(){
    super.componentDidMount()

    this.getNews();
  }

  getCategories(){
    Resource.getCategories().then((data) => {
      console.log(data)
      let result = []

      data.map((d) => {
        result.push({
          name: d.name,
          slug: d.slug
        })
      })

      // this.mSetState({loading: false, categories: result})
    }).catch((err) => {
      alert(err)
    })
  }

  getNews(){
    this.mSetState({loading: true})

    Resource.getNewsList().then((data) => {
      console.log(data)
      let result = []

      data.map((d) => {
        result.push({
          title: d.title.rendered,
          category: d._embedded['wp:term'][0][0].name,
          excerpt: d.excerpt.rendered,
          date: this.moment(d.date),
          thumbnail: d._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
        })
      })
      this.mSetState({loading: false, data: result})
    }).catch((err) => {
      alert(err)
    })
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={{...this.styles.main.content}}>
            <this.common.MText style={{...this.styles.main.heading, marginHorizontal: 12, marginVertical: 20}}>News</this.common.MText>
            <NewsHighlightFragment uri="https://cepagram.com/wp-content/uploads/2019/07/Two-Tower-Cranes-533x261.jpg" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere" />
            <Tabs renderTabBar={()=> <ScrollableTab />}>
              {this.state.categories.map((item, index) => {
                return(
                  <Tab style={{...this.styles.main.content}} key={index} heading={item.name}>
                    <NewsListFragment onItemClick={() => this.props.navigation.navigate("Detail")} loading={this.state.loading} data={this.state.data} />
                  </Tab>
                )
              })}
            </Tabs>
            
            <Button block onPress={() => this.props.navigation.navigate("Detail")}>
              <this.common.MText>Go</this.common.MText>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}
