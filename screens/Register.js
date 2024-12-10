import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, Alert, Pressable} from 'react-native';
import { validateEmail } from '../utils';

const Register = () => {
  const [email, onChangeEmail] = React.useState('');
  const [buttonDisableStatus, setButtonDisabled] = useState(true);

  const emailValidation = (email) => {
    onChangeEmail(email);
    if (validateEmail(email)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  return <View style={registerStyles.container}>
    <Image source={require('../assets/little-lemon-logo-grey.png')}
    resizeMode="contain"
    accessible={true}
    accessibilityLabel={'Little Lemon Logo'} 
    style={registerStyles.image}/>
    <Text style={registerStyles.text}>Register to our app to start ordering delicous food!</Text>
    <TextInput style={registerStyles.inputBox}
        value={email}
        onChangeText={(email) => emailValidation(email)}
        placeholder={'email'}
        keyboardType={'email-address'} />
    <TextInput style={registerStyles.inputBox}
        value={email}
        onChangeText={(email) => emailValidation(email)}
        placeholder={'password'}
        keyboardType={'password'} />
    <Pressable disabled={buttonDisableStatus} onPress={() => Alert.alert("Welcome to little lemon")} style={[registerStyles.button, buttonDisableStatus && registerStyles.buttonDisable]}>
      <Text style={registerStyles.buttonText}>Register</Text>
    </Pressable>
  </View>;
};

const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 30
  },
  image: {
    height: 150,
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 40,
    padding: 30
  },
  inputBox: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    width:"85%",
    borderRadius: 4,
    color: 'grey'
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#495E57',
    width: '85%',
    borderRadius: 4
  },
  buttonDisable: {
    backgroundColor: 'grey'
  },
  buttonText: {
    color: '#EDEFEE',
    textAlign: 'center',
    fontSize: 15
  }
})

export default Register;
