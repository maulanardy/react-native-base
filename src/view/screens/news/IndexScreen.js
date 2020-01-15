import React, { Component, Fragment } from 'react'
import {SafeAreaView, FlatList} from 'react-native'
import { Container, Text, Content, View, Button, Tab, Tabs, ScrollableTab} from 'native-base';
import BaseComponent, * as Base from '../../../component/BaseComponent'
import Resource from '../../../network/api/Resources'
import NewsListFragment from '../../fragments/NewsListFragment'
import NewsHighlightFragment from '../../fragments/NewsHighlightFragment'
import { connect } from 'react-redux';

class IndexScreen extends BaseComponent {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    super.componentDidMount()

    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      payload => this.willFocus()
    );

    this.props.setNewsCategoryList();
    this.props.setNewsList();
  }

  componentWillUnmount(){
    super.componentWillUnmount()

    this.willFocusSubscription.remove()
  }

  willFocus(){
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={{...this.styles.main.content}}>
            <this.common.MText style={{...this.styles.main.heading, marginHorizontal: 12, marginVertical: 20}}>News</this.common.MText>
            <NewsHighlightFragment uri="https://cepagram.com/wp-content/uploads/2019/07/Two-Tower-Cranes-533x261.jpg" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere" />
            <Tabs renderTabBar={()=> <ScrollableTab />}>
              {this.props.newsCategory.list.map((item, index) => {
                return(
                  <Tab style={{...this.styles.main.content}} key={index} heading={item.name}>
                    <NewsListFragment onItemClick={() => this.props.navigation.navigate("Detail")} loading={this.props.news.loading} data={this.props.news.list} />
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

export default connect(Base.stateToProps, Base.dispatchToProps)(IndexScreen);