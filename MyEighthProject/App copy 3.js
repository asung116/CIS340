import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Image source={require('./assets/CSULogo2.jpg')}
      style={styles.logo} />
      <Text style={styles.insts}> 
        Press the button below to select an image on your phone! 
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('You have not selected an image yet')}>
        <Text style={styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFFE0",
  },

  button: {
    alignItems: "center",
    backgroundColor: "#20B2AA",
    padding: 10
  },

  insts: {
    fontSize: 10,
    color: "#87CEFA",
    marginHorizontal: 15,
    marginBottom: 10,
  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20
  },

  buttonText: {
    fontSize: 20,
    color: "#fff"
  }
});
