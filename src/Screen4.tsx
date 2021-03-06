import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity,BackHandler } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

function Screen4(props:any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 4</Text>
     </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {

    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#000'
  }
})

export default Screen4