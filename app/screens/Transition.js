import React, { useCallback, useState  } from 'react';
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Transition( {navigation} ) {
    const [user, setUser] = useState({_id: '', email: '', img: '', location: '', username: '' });

    useFocusEffect(
        useCallback(() => {
            AsyncStorage.getItem('@user')
            .then(user => {
                if (user != null) {
                    user = JSON.parse(user);
                    setUser(user);
                    navigation.navigate('Post');
                } else {
                    setUser({_id: '', email: '', img: '', location: '', username: '' });
                    navigation.navigate('Join Community');
                }
            });
        }, [user])
    );

    return null;
}

export default Transition;