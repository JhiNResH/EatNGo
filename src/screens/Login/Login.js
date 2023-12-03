import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import User from '../../components/customInput';
import Logo from '../../../assets/images/possible.jpg';
import CustomButton from '../../components/customButton';
import SocialSignInButtons from '../../components/SocialSignInButtons.js/SocialSignInButtons';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();

  const SignInPressed = () => {
    console.warn('Sign In');
  }

  const SignUpPressed = () => {
    console.warn('Sign Up');
  }

  const ForgotPasswordPressed = () => {
    console.warn('Forgot Password');
  }



  return (
    //showsVerticalScrollIndicator={false}=>消除滾動條
    <ScrollView showsVerticalScrollIndicator={false}>
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
        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Sign Up"
          onPress={SignUpPressed}
          type="Tertiary"
        />
      </View>
    </ScrollView>

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

