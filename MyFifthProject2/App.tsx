import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'column',justifyContent: 'center', alignItems: 'baseline'}}> 
      <View style={{height: 50, backgroundColor: 'red', alignSelf: 'stretch'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}}/>
    </View>
  );
}

// Line 7: options for alignSelf = flex-end, flex-start, stretch
// Note for stretch: you must remove width to use stretch, otherwise width should be there