import React,{Component} from "react";
import {View, Text, Button, FlatList,Image,StyleSheet, TouchableOpacity,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export default function UserCard (props){
  
    const item = props.user;
     return(  
      <TouchableOpacity onPress={() => props.handlePress(item)}>
        <Text> {item.login} </Text>
          <ImageBackground
            style={{
              width: 100,
              height: 100,
              marginRight: 20,
              borderRadius: 10,
                 }}
            source= {require('../images/person.jpg')} >
           <Image
            style={{
            width: 100,
            height: 100,
            marginRight: 20,
            borderRadius: 10,}}
            source={{
             uri:item.avatar_url}} />
          </ImageBackground>
      </TouchableOpacity>
    )
    }   

const styles =StyleSheet.create({
  image:{
    width:100,
    height:100,
    resizeMode: 'contain'
  }
})