import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/Header/index.js';
import Expenses from './src/Expenses/index.js';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Expenses />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#591DA9',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
