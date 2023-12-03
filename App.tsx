import React from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, Text, View, } from 'react-native';

import Login from './src/screens/Login/Login';
import Signup from './src/screens/Signup/Signup';
import ConfirmEmail from './src/components/ConfirmEmail/ConfirmEmail';
import ForgotPassword from './src/components/ForgotPassword/ForgotPassword';
import NewPassword from './src/components/NewPassword/NewPassword';
import Navigation from './src/navigation';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <Navigation />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
}
);

export default App;
