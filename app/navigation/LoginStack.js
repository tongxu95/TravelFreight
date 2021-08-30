import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationActions } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
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
        initialRouteName="Transition"
      >
        <Stack.Screen name='Transition' component={TransitionLogin} />
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Settings' component={SettingsScreen}/>
      </Stack.Navigator>
  );
  
} 


export default LoginStack;