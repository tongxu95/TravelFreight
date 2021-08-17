import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';
import {
    SubTitle,
    Divider,
    SettingsBackground,
    SettingsHeader,
    GroupLayout,
    SettingsLayout,
    SettingsText,
    LogoutContainer
} from '../config/styles';

function SettingsScreen( {navigation} ) {
    return (
        <SettingsBackground>
            <SettingsHeader>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Ionicons
                        name='arrow-back'
                        size={25}
                        color={colors.primary}
                    />
                </TouchableOpacity>

                <SubTitle style={{paddingLeft: 20}}>Settings</SubTitle>
            </SettingsHeader>
            <GroupLayout>
                <SettingsLayout>
                    <FontAwesome
                        name='bell-o'
                        size={18}
                        color={colors.primary}
                    />
                    <SettingsText>Notification</SettingsText>
                </SettingsLayout>
                <Divider color={colors.whitegrey}/>
                <SettingsLayout>
                    <Ionicons
                        name='options'
                        size={18}
                        color={colors.primary}
                    />
                    <SettingsText>Preferences</SettingsText>
                </SettingsLayout>
            </GroupLayout>
            <GroupLayout>
                <SettingsLayout>
                    <Ionicons
                        name='information-circle-outline'
                        size={18}
                        color={colors.primary}
                    />
                    <SettingsText>About</SettingsText>
                </SettingsLayout>
                <Divider/>
                <SettingsLayout>
                    <AntDesign
                        name='customerservice'
                        size={18}
                        color={colors.primary}
                    />
                    <SettingsText>Contact Us</SettingsText>
                </SettingsLayout>
            </GroupLayout>
            <GroupLayout>
                <LogoutContainer onPress={() => navigation.navigate('Login')}>
                    <SettingsText>Log Out</SettingsText>
                </LogoutContainer>
            </GroupLayout>
        </SettingsBackground>
    );
}

export default SettingsScreen;