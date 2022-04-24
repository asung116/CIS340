import React from 'react';
import { Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>My name is {props.name}, I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text> Welcome to CIS340!</Text>
      <Student name="Alex Sung"/>
      <Student name="Captain Jack Sparrow"/>
      <Student name="Lightning McQueen"/>
      <Student name="Elizabeth Bennet"/>
    </View>
  );
}
