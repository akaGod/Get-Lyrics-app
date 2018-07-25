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
import axios from 'axios';
import {Alert,View,FlatList} from 'react-native';
import Song from './Song';
import Songlyrics from './songlyrics'

export default class App extends Component{
  state =
  {
    track: '' ,
    loading :false,
    list:[],
    mylyrics:false,
    track_id_clicked:'',
    track_name:''
  };

  search(){
    //Alert.alert('hey')
    this.setState({loading:true})
    var startApi= 'https://api.musixmatch.com/ws/1.1/track.search?format=json&q_track='
    var endApi='&quorum_factor=1&page_size=100&apikey=0298623f90e69244737105d190f71df6'

    axios.get(startApi+this.state.track+ endApi).then((res)=>{
      //console.log(res.data.message.body.track_list);
      var track_list=res.data.message.body.track_list;
      if(track_list==[] ){
        console.log('not result')
        }
      this.setState({list:track_list,loading:false})
      /*res.data.callback((dt)=>{
        console.log(dt)
      })*/
      //Alert.alert(JSON.stringify(res))
    }).catch((err)=>{
      console.log(err);
      //Alert.alert(err)
    })

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
          ):(this.state.mylyrics?(
            <Songlyrics
            modalVisible={this.state.mylyrics}
            goback={() => this.setState({mylyrics:false})}
            id={this.state.track_id_clicked}
            songname={this.state.track_name}

            />
          ):(<FlatList
             data={this.state.list}
             keyExtractor={(item)=>JSON.stringify(item.track.track_id)}
             renderItem={({item}) => (<Song
               press={() => this.setState({mylyrics:true,track_name:item.track.track_name,track_id_clicked:item.track.track_id})}
               songname={item.track.track_name}
               artistname={item.track.artist_name}
                />)}
             />)
             )}




        </Content>
      </Container>
    );
  }
}
