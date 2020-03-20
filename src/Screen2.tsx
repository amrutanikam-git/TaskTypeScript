import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


function Screen2(props:any) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Screen3')}>
        <Text style={styles.buttonText}>Go To Screen 3</Text>
      </TouchableOpacity>
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

export default Screen2