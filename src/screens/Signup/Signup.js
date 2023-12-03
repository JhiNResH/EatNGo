import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import User from '../../components/customInput';
import CustomButton from '../../components/customButton';
import SocialSignInButtons from '../../components/SocialSignInButtons.js/SocialSignInButtons';
import { text } from 'body-parser';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');


  const registerPressed = () => {
    console.warn('Registered');
  }

  const SignInPressed = () => {
    console.warn('Sign In');
  }

  const TermsofServicePressed = () => {
    console.warn('Terms of Service');
  }

  const PrivacyPolicyPressed = () => {
    console.warn('Privacy Policy');
  }

  return (
    //showsVerticalScrollIndicator={false}=>消除滾動條
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>
          Create an account
        </Text>
        <User
          placeholder="Username"
          value={username}
          setValue={setUsername} />
        <User
          placeholder="Email"
          value={email}
          setValue={setEmail} />
        <User
          placeholder="Password"
          value={password}
          setValue={setPassword}
          //secureTextEntry={true} => It's the same
          secureTextEntry
        />
        <User
          placeholder="Confirm Password"
          value={repassword}
          setValue={setRepassword}
          //secureTextEntry={true} => It's the same
          secureTextEntry
        />

        <CustomButton
          text="Register"
          onPress={registerPressed}
        />
        <Text style={styles.text}>
          By creating an account, you agree to our{' '}
          <Text style={styles.link} onPress={TermsofServicePressed}>Terms of Service</Text> and{' '}
          <Text style={styles.link} onPress={PrivacyPolicyPressed}>Privacy Policy</Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Have an account? Sign In"
          onPress={SignInPressed}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#3B71F3',
    fontSize: 12,
    fontWeight: 'bold',
  }

})

export default Signup

