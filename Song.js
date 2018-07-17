import React, { Component } from 'react';
import {
  Button,
  Left,
  Body,
  ListItem,
  Text,
  Thumbnail

} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {View,StyleSheet,} from 'react-native';


export default (props)=>(
  <TouchableOpacity style={styles.song}
    onPress={props.press}>
    <View>
      <Thumbnail square large source={{uri: 'http://www.widehdimages.com/uploads/large/music/music-background-wallpaper.jpg'}} />
    </View>

    <View>
      <Text>
        {props.songname}
      </Text>
      <Text>
        by {props.artistname}
      </Text>
    </View>
  </TouchableOpacity>
)
var styles = StyleSheet.create(
  {
    song:{
      flexDirection:'row',
      padding:10
    }
  })
