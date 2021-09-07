import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TransitionLogin from '../screens/TransitionLogin';

const Stack = createStackNavigator();

function LoginStack() {

  return (
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Transition Login"
      >
        <Stack.Screen name='Transition Login' component={TransitionLogin} />
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Settings' component={SettingsScreen}/>
      </Stack.Navigator>
  );
  
} 


export default LoginStack;