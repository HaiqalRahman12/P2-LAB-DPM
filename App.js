import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Haikal Rahman</Text>
      <Text style={styles.text}>Teknik Informatika </Text>

      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, 
    color: 'blue', 
    fontWeight: 'bold', 
    marginBottom: 20, 
  },
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '80%', 
  },
  box: {
    width: 100, 
    height: 100, 
  },
});
