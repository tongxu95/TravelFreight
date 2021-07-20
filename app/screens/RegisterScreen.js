import React, { useState } from 'react';
import { Keyboard, Text, TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import { Octicons, Fontisto } from '@expo/vector-icons';

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
    OtherView,
    TextLink,
    TermsNConditions,
    AgreementContainer
} from '../config/styles';

// need to check uniqueness of username

function RegisterScreen( {navigation} ) {

    const [hidePassword, setHidePassword] = useState(true);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <StyledImageBackground
                imageStyle={{ opacity: 0.4 }}
                source={require('../assets/background.jpg')}
            >
                <SubTitle>Sign Up</SubTitle>
                    <Formik
                        initialValues={{ username: '', email: '', password: '' }}
                        onSubmit={(values) => console.log(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <FormContainer>
                                    <MyTextInput
                                        icon='person'
                                        placeholder='Username'
                                        placeholderTextColor={colors.grey}
                                        onChangeText={handleChange('username')}
                                        onBlur={handleBlur('username')}
                                        value={values.username}
                                    />
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
                                    <TermsNConditions>
                                        <TouchableOpacity onPress={() => setToggleCheckBox(!toggleCheckBox)}>
                                            <Fontisto
                                                size={15}
                                                color={colors.primary}
                                                name={toggleCheckBox ? 'checkbox-active' : 'checkbox-passive'}
                                            />
                                        </TouchableOpacity>
                                        <AgreementContainer>
                                            <Text>I have read and agree to TravelFreight's </Text>
                                            <TouchableOpacity>
                                                <TextLink onPress={handleSubmit}>Terms of Use </TextLink>
                                            </TouchableOpacity>
                                            <Text>and </Text>
                                            <TouchableOpacity>
                                                <TextLink onPress={handleSubmit}>Privacy Policy </TextLink>
                                            </TouchableOpacity>
                                        </AgreementContainer>
                                    </TermsNConditions>
                                    <StyledButton>
                                        <ButtonText onPress={handleSubmit}>Sign Up</ButtonText>
                                    </StyledButton>
                                    <Line />
                                    <OtherView>
                                        <Text>Already have an account? </Text>
                                        <TouchableOpacity>
                                            <TextLink onPress={() => navigation.navigate('Login')}>Sign In</TextLink>
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

export default RegisterScreen;