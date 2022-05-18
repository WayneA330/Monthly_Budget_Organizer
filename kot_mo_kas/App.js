// import { StatusBar } from 'expo-status-bar';
// import styles from './code/styles/Styles'
// import { Text, View } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './code/components/NavigationBar'

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

