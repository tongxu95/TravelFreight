import React, { useState } from 'react';
import { Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Formik } from 'formik';
import { Octicons, FontAwesome } from '@expo/vector-icons';

import colors from '../config/colors';
import {
    StyledImageBackground,
    SubTitle,
    FormContainer,
    StyledTextInput,
    LeftIcon,
    RightIcon,
    StyledButton,
    ButtonText,
    Line,
    ThirdPartyContainer,
    ThirdPartyButton,
    OtherView,
    PWRecoveryView,
    TextLink
} from '../config/styles';

function LoginScreen( {navigation} ) {

    const [hidePassword, setHidePassword] = useState(true);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <StyledImageBackground
                imageStyle={{ opacity: 0.4 }}
                source={require('../assets/background.jpg')}
            >
                <SubTitle>Login</SubTitle>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <FormContainer>
                                <MyTextInput
                                    icon='mail'
                                    placeholder='Email Address'
                                    placeholderTextColor={colors.grey}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType='email-address'
                                />
                                <MyTextInput
                                    icon='lock'
                                    placeholder='Password'
                                    placeholderTextColor={colors.grey}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <PWRecoveryView>
                                    <TouchableOpacity>
                                        <TextLink onPress={handleSubmit}>Forgot Password?</TextLink>
                                    </TouchableOpacity>
                                </PWRecoveryView>
                                <StyledButton>
                                    <ButtonText onPress={handleSubmit}>Login</ButtonText>
                                </StyledButton>
                                <Line />
                                <ThirdPartyContainer>
                                    <ThirdPartyButton onPress={handleSubmit}>
                                        <FontAwesome
                                            name='google'
                                            size={25}
                                            color={colors.white}
                                        />
                                        <ButtonText thirdParty={true}>Google</ButtonText>
                                    </ThirdPartyButton>
                                    <ThirdPartyButton onPress={handleSubmit}>
                                        <FontAwesome
                                            name='facebook-square'
                                            size={25}
                                            color={colors.white}
                                        />
                                        <ButtonText thirdParty={true}>Facebook</ButtonText>
                                    </ThirdPartyButton>
                                </ThirdPartyContainer>
                                <OtherView>
                                    <Text>Don't have an account already? </Text>
                                    <TouchableOpacity>
                                        <TextLink onPress={() => navigation.navigate('Sign Up')}>Signup</TextLink>
                                    </TouchableOpacity>
                                </OtherView>
                            </FormContainer>
                        </TouchableWithoutFeedback>
                    )}
                </Formik>
            </StyledImageBackground>  
        </TouchableWithoutFeedback>
    );
};

const MyTextInput = ({ icon, isPassword, hidePassword, setHidePassword, ...props }) => {

    return (
        <View>
            <LeftIcon>
                <Octicons
                    name={icon}
                    size={30}
                    color={colors.grey}
                />
            </LeftIcon>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon
                    onPress={() => setHidePassword(!hidePassword)}
                >
                    <Octicons
                        name={hidePassword ? 'eye-closed' : 'eye'}
                        size={30}
                        color={colors.grey}
                    />
                </RightIcon>
            )}
        </View>
    );
};

export default LoginScreen;