import React, { Component } from 'react';
import {
  Button,
  Left,
  Body,
  ListItem,
  Text,
  Container,
  Header,
  Title,
  Content,
  Icon,


} from 'native-base';
import {View,StyleSheet,Modal} from 'react-native';
import axios from 'axios';
export default class Songlyrics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics:'',
      id:this.props.id
    }

  }

  componentWillMount() {

    this.setState({loading:true})

    var startApi= 'https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=json&track_id='
    var endApi='&apikey=0298623f90e69244737105d190f71df6'

    axios.get(startApi+this.state.id+ endApi).then((res) => {

      console.log(res.data.message.body.lyrics.lyrics_body);
      var lyrics_body=res.data.message.body.lyrics.lyrics_body;
      if(lyrics_body === false){
        console.log("song lyrics not found");
      }
      this.setState({lyrics:lyrics_body,loading:false})
    }).catch((err)=>{
          console.log(err);

    })
  }

   render(){
     return (
       <Modal
         animationType="slide"
         transparent={false}
         visible={this.props.modalVisible}
         onRequestClose={() => {
           alert('Modal has been closed.');
         }}>

         <Container>
           <Header>
             <Left>
               <Button onPress={this.props.goback} transparent>
                 <Icon name="arrow-back" />
               </Button>
             </Left>
             <Body>
               <Title>
                 {this.props.songname}
               </Title>
             </Body>

           </Header>

           <Content>
             <Text>
              {this.state.lyrics}
             </Text>
           </Content>

         </Container>

       </Modal>
     )
   }
}
