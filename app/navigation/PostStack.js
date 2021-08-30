import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Transition from '../screens/Transition';
import PostScreen from '../screens/PostScreen';

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
        </Stack.Navigator>
    );
    
} 


export default PostStack;