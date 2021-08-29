import React, { useCallback, useState  } from 'react';
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

function TransitionLogin( {navigation} ) {
    const [user, setUser] = useState({_id: '', email: '', img: '', location: '', username: '' });

    useFocusEffect(
        useCallback(() => {
            AsyncStorage.getItem('@user')
            .then(user => {
                if (user != null) {
                    user = JSON.parse(user);
                    setUser(user);
                    navigation.navigate('Profile', {...user});
                } else {
                    setUser({_id: '', email: '', img: '', location: '', username: '' });
                    navigation.navigate('Login');
                }
            });
        }, [user])
    );

    return null;
}

export default TransitionLogin;