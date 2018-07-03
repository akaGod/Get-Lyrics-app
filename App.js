

import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Content,
  Right,
  Left,
  Body,
  Icon,
  Input,
  Item,
  Text,
  Spinner

} from 'native-base';

import {Alert,View} from 'react-native';

export default class App extends Component{
  state =
  {
    track: '' ,
    loading :false
  };

  search(){
    Alert.alert('hey')
    this.setState({loading:true})
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Lyrics Mania</Title>
          </Body>
          <Right >
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>

        <Content searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search"
            onChangeText={(track) => this.setState({track})}
            onSubmitEditing={()=> this.search()}
            />

          </Item>
          {this.state.loading?(
            <Spinner color='green' />
          ):(<View/>)}


        </Content>

      </Container>
    );
  }
}
