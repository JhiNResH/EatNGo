import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import User from '../../components/customInput';
import Logo from '../../assets/images/possible.jpg';
import CustomButton from '../../components/customButton';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();

  const SignInPressed = () => {
    console.warn('Sign In');
  }

  const ForgotPasswordPressed = () => {
    console.warn('Forgot Password');
  }

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode='contain'
      />
      <User
        placeholder="Username"
        value={username}
        setValue={setUsername} />
      <User
        placeholder="Password"
        value={password}
        setValue={setPassword}
        //secureTextEntry={true} => It's the same
        secureTextEntry
      />
      <CustomButton
        text="Sign In"
        onPress={SignInPressed}
      />
      <CustomButton
        text="Forgot Password?"
        onPress={ForgotPasswordPressed}
        type="Tertiary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  }
})

export default Login

