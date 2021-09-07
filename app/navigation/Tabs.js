import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LoginStack from './LoginStack';
import PostStack from './PostStack';
import FindScreen from '../screens/FindScreen';
import FavScreen from '../screens/FavScreen';
import ChatScreen from '../screens/ChatScreen';
import colors from '../config/colors'

const Tab = createBottomTabNavigator();

function MyTabs() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name === 'Post') {
            iconName = focused ? 'add-circle-sharp' : 'add-circle-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'heart-sharp' : 'heart-outline';
          } else {
            iconName = focused ? 'chatbubble-ellipses-sharp' : 'chatbubble-ellipses-outline';
          }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      tabBarOptions={{
        activeTintColor: colors.tertiery,
        inactiveTintColor: colors.grey,
      }}
    >    
      <Tab.Screen name="Explore" component={FindScreen} />
      <Tab.Screen name="Favorite" component={FavScreen} />
      <Tab.Screen name="Post" component={PostStack} options={{unmountOnBlur: true}}/>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Home" component={LoginStack} options={{unmountOnBlur: true}}/>    
    </Tab.Navigator>
  );
} 


export default MyTabs;