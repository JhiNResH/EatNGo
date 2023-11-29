
import React from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import Login from './src/Login/Login';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {

  return (
    <SafeAreaView>
      <Login />
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
