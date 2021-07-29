import React, { useState }  from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';
import {
    SubTitle,
    Line,
    ProfileView,
    UsernameView,
    UserInfoView,
    UserInfoText,
    SettingView,
    EditView,
    EditText
} from '../config/styles';

function ProfileScreen({ navigation, route} ) {
    // const {username, email} = route.params;
    const [isEmpty, setIsEmpty] = useState(true);

    return (
        <View>
            <ProfileView>
                <Avatar.Image 
                    source={require('../assets/blank-profile-picture.png')} 
                    size={80}  
                />
                <UsernameView>
                    {/* <SubTitle>{username}</SubTitle> */}
                    <SubTitle>Username</SubTitle>
                </UsernameView>
                <SettingView>
                    <Ionicons name='settings-outline' size={25} colors={colors.secondary} onPress={() => navigation.navigate('Settings')}/>
                </SettingView>
            </ProfileView>
            <UserInfoView>
                <Ionicons name='mail-outline' size={25} color={colors.primary}/>
                {/* <UserInfoText>{email}</UserInfoText> */}
                <UserInfoText>Email</UserInfoText>
            </UserInfoView>
            <UserInfoView>
                <Ionicons name='location-outline' size={25} color={colors.primary}/>
                { isEmpty && <UserInfoText isEmpty={isEmpty}>Enter Address</UserInfoText>}
                { !isEmpty && <UserInfoText isEmpty={isEmpty}>Location</UserInfoText>}
                <UserInfoText></UserInfoText>
                <EditView>
                    <EditText>Add</EditText>
                </EditView>
            </UserInfoView>
            <View style={{paddingTop: 40}}>
                <Line />
            </View>
        </View>

    );
}

export default ProfileScreen;