import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import UserCard from './UserCard';
export default function UsersList({navigation}) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    console.log('hi');
    fetch('https://api.github.com/users?since=0')
      .catch(error => console.error())
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);
  const goToDetails = item => {
    navigation.navigate('Details', {user: item});
  };
  return (
    <FlatList
      data={user}
      renderItem={({item}) => {
        return <UserCard user={item} handlePress={goToDetails} />;
      }}
    />
  );
}
