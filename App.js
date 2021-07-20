import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoadScreen from './app/screens/LoadScreen';
import MyTabs from './app/navigation/Tabs';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>

      <MyTabs />

      {/* <LoadScreen /> */}
    </NavigationContainer>
  );
}
