import React, { Component } from 'react';
import {
  Button,
  Left,
  Body,
  ListItem,
  Text,

} from 'native-base';
import {View,StyleSheet,Modal} from 'react-native';

export default class Songlyrics extends Component {

   render(){
     return (
       <Modal>
         animationType="slide"
         transparent={false}
         visible={this.state.modalVisible}
         onRequestClose={() => {
           alert('Modal has been closed.');
         }}>
       </Modal>
     )
   }
}
