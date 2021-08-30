import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MyTabs from './app/navigation/Tabs';
import JoinCommStack from './app/navigation/JoinCommStack';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      
      <Stack.Navigator 
            screenOptions={{
            headerShown: false,
            }}
            initialRouteName='Tabs'
        >
            <Stack.Screen name='Tabs' component={MyTabs} />
            <Stack.Screen name='Join Community' component={JoinCommStack} />
        </Stack.Navigator>

    </NavigationContainer>
  );
}
