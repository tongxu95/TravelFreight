import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';
import {
    SubTitle,
    FormContainer,
    StyledButton,
    ButtonText,
    Line,
    JoinCommContainer,
    Pitch,
    GoBackContainer,
    GoBackButton
} from '../config/styles';

function JoinCommScreen({ navigation }) {

    return (
        <JoinCommContainer>
            <SubTitle>Join our Community!</SubTitle>
            <Pitch>Join today and enjoy duty-free shopping via surrogate shoppers!</Pitch>
            <FormContainer>
                <StyledButton 
                    onPress={() => {
                        navigation.navigate('Login');
                }}
                >
                    <ButtonText>Login</ButtonText>
                </StyledButton>    
                <Line />   
                <StyledButton 
                    onPress={() => {
                        navigation.navigate('Sign Up');
                }}
                >
                    <ButtonText>Register</ButtonText>
                </StyledButton>
                <GoBackContainer>
                    <GoBackButton onPress={() => {
                        navigation.navigate('Tabs', {screen: 'Explore'});
                    }}>
                        <Ionicons
                            name='arrow-back-outline'
                            size={30}
                            color={colors.white}
                        />
                    </GoBackButton>
                </GoBackContainer>
            </FormContainer>

        </JoinCommContainer>
    );
}

export default JoinCommScreen;