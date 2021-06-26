import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/Header/Header.js';


export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.header} />
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
  header: {
  }
});
