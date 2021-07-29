import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LoadScreen from './app/screens/LoadScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import MyTabs from './app/navigation/Tabs';


export default function App() {

  return (
    <NavigationContainer>

      {/* <MyTabs /> */}

      {/* <LoadScreen /> */}

      <ProfileScreen/> 
    </NavigationContainer>
  );
}
