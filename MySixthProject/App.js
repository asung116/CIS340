import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  // const csuLogo = {
  //   source={require("./assets/CSUlogo.png")}
  // };
  /* ^ I tried to use the URI method (like in APP copy.js) but it wasn't appearing. 
  I was using the link shown in the video because when I tried to upload my own image to 
  github last time, it completely messed up my push and pull. I will skip this for now to avoid more 
  headache, but I got it to work on React A3, so I know how to do it, but to avoid further 
  headache I will not be doing that on this assignment*/

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/CSULogo2.jpg')} style={styles.image}>

        <Text style={styles.text}> CSU Logo </Text>

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "row",
  },

  image: {
    flex: 1,
    // height: 350,
    // width: 350,
    resizeMode: "cover",
    justifyContent: 'center',
    // alignItems: 'center',
  },

  text: {
    color: "red",
    fontSize: 40,
    fontWeight: 'bold',
  }

});
