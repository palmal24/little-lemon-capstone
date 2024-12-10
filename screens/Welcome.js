import * as React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

const Welcome = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={welcomeStyles.container}>
    <Image source={require('../assets/little-lemon-logo.png')}
    resizeMode="contain"
    accessible={true}
    accessibilityLabel={'Little Lemon Logo'} 
    style={welcomeStyles.image}/>
    <Text style={welcomeStyles.text}>Little Lemon restaurant</Text>
    <Pressable onPress={() => navigation.navigate('Register')} style={welcomeStyles.button}>
      <Text style={welcomeStyles.buttonText}>Login/Register</Text>
    </Pressable>
  </View>
};

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'

  },
  image: {
    height: 200,
    borderRadius: 20,
  },
  text: {
    paddingVertical: 50,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 40
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#495E57',
    width: '90%',
    position: 'absolute',
    bottom: 20
  },
  buttonText: {
    color: '#EDEFEE',
    textAlign: 'center',
    fontSize: 15
  }
})

export default Welcome;
