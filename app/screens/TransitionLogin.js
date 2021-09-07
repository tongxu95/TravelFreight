import React, { useCallback  } from 'react';
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

function TransitionLogin({ navigation }) {
    let user;

    useFocusEffect(
        useCallback(() => {
            AsyncStorage.getItem('@user')
            .then(user => {
                if (user != null) {
                    user = JSON.parse(user);
                    navigation.navigate('Profile', {...user});
                } else {
                    navigation.navigate('Join Community');
                }
            });
        }, [user])
    );

    return null;
}

export default TransitionLogin;