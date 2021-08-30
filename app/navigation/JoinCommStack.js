import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import JoinCommScreen from '../screens/JoinCommScreen';

const Stack = createStackNavigator();

function JoinCommStack() {

  return (
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Join Community"
      >
        <Stack.Screen name='Join Community' component={JoinCommScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={RegisterScreen} />
      </Stack.Navigator>
  );
  
} 


export default JoinCommStack;