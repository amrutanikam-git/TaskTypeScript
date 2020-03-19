
import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,BackHandler } from 'react-native';

class Screen4 extends Component {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
      }
    
      onBackPress = () => {
        const { navigation } = this.props
        navigation.navigate('Screen 1')
        return true;
      }; 
  render() {
    const { navigation } = this.props
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Screen 4</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Screen 1')}>
          <Text style={styles.buttonText}>Go To Screen 1</Text>
        </TouchableOpacity>
      </View>
    );
  }
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

