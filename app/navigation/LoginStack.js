import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

function LoginStack() {

  return (
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={RegisterScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen}/>
      </Stack.Navigator>
  );
  
} 


export default LoginStack;