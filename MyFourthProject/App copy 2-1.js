import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

export default function MyScrollViewApp() {
  const dog = {
    url: 'https://user-images.githubusercontent.com/89489179/164997645-f08fafe2-fb49-4c38-b356-823c799d4973.jpg',
    width: 64,
    height: 64
  };
  return (
    <ScrollView style={{padding: 40}}>
      <Text style={{fontsize: 80}}> Try to scroll down</Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontsize: 80}}> Try to scroll down again, if you like</Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontsize: 80}}> Try to scroll down again, if you like</Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontsize: 80}}> Try to scroll down again, if you like</Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontsize: 80}}> Try to scroll down again, if you like</Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontsize: 80}}> Try to scroll down again, if you like</Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontsize: 80}}> Try to scroll down again, if you like</Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
    </ScrollView>
  );
}

