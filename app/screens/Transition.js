import React, { useCallback, useState  } from 'react';
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Transition( {navigation} ) {
    let user;

    useFocusEffect(
        useCallback(() => {
            AsyncStorage.getItem('@user')
            .then(user => {
                if (user != null) {
                    user = JSON.parse(user);
                    navigation.navigate('Post', {...user});
                } else {
                    navigation.navigate('Home');
                }
            });
        }, [user])
    );

    return null;
}

export default Transition;