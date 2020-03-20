import React from 'react'
import { Provider } from "react-redux";
import configureStore from "./src/redux/store/index";
import MainStackNavigator from './src/navigation/MainStackNavigator';
const store = configureStore();
export default function App() {
  return (
    <Provider store={store}>
       <MainStackNavigator />
     </Provider>
  )
 
}