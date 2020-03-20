import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Screen1 from '../Screen1'
import Screen2 from '../Screen2'
import Screen3 from '../Screen3'
import Screen4 from '../Screen4'
const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Screen1'
         headerMode='float'>
        <Stack.Screen name='Screen1' component={Screen1} options={{ title: 'Screen 1' }} />
        <Stack.Screen name='Screen2' component={Screen2}  options={{ title: 'Screen 2' }}/>
        <Stack.Screen name='Screen3' component={Screen3}  options={{ title: 'Screen 3' }}/>
        <Stack.Screen name='Screen4' component={Screen4}  options={{ title: 'Screen 4' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator