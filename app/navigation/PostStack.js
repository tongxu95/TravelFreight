import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Transition from '../screens/Transition';
import PostScreen from '../screens/PostScreen';
import JoinCommScreen from '../screens/JoinCommScreen';

const Stack = createStackNavigator();

function PostStack() {

    return (
        <Stack.Navigator 
            screenOptions={{
            headerShown: false,
            }}
            initialRouteName='Transition'
        >
            <Stack.Screen name='Transition' component={Transition} />
            <Stack.Screen name='Post' component={PostScreen} />
            <Stack.Screen name='Join Community' component={JoinCommScreen} />
        </Stack.Navigator>
    );
    
    } 


export default PostStack;