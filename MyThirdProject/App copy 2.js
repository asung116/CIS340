import React from 'react';
import { Text, View, Image } from 'react-native';

export default function MyDog() {

  let pic = {
    url: 'https://raw.githubusercontent.com/asung116/CIS340/main/dog.jpg'};

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source={pic}
        style={{width: 200, height: 200}}
      />
      <Text>Hello, here is my dog!</Text>
    </View>
  );
}