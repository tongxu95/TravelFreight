import React, { useState } from 'react';
import { ActivityIndicator, Keyboard, Text, TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native';
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
    MessageBox,
    StyledButton,
    ButtonText,
    Line,
    OtherView,
    TextLink,
    TermsNConditions,
    PWContainer,
    PWRequirment,
    AgreementContainer
} from '../config/styles';

import axios from 'axios';

// need to check uniqueness of username

function RegisterScreen({ navigation }) {

    const [hidePassword, setHidePassword] = useState(true);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [showPWReq, setShowPWReq] = useState(false);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const handleSignup = (credentials, setSubmitting, resetForm) => {
        handleMessage(null);
        const url = 'https://secret-cove-40177.herokuapp.com/user/signup';

        if (toggleCheckBox) {
            axios.post(url, credentials).then((response) => {
                const {status, message, data} = response.data;
                
                if (status !== 'SUCCESS') {
                    handleMessage(message, status);
                    setSubmitting(false);
                } else {
                    navigation.navigate('Profile', {...data});
                    setSubmitting(false);
                    resetForm({ values: '' });
                }
            }).catch(err =>{
                console.log(err);
                setSubmitting(false);
                handleMessage('An error occurred. Check you network and try again!', 'FAILED');
            })    
        } else {
            handleMessage('Please review and agree to our terms and privacy policy!', 'FAILED');
            setSubmitting(false);
        }

    };

    const handleMessage = (message, type) => {
        setMessage(message);
        setMessageType(type);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <StyledImageBackground
                imageStyle={{ opacity: 0.35 }}
                source={require('../assets/background.jpg')}
            >
                <SubTitle>Sign Up</SubTitle>
                <Formik 
                    initialValues={{ username: '', email: '', password: '' }}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        handleSignup(values, setSubmitting, resetForm);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <FormContainer>
                                <MyTextInput
                                    icon='person'
                                    placeholder='Username'
                                    placeholderTextColor={colors.grey}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    onFocus={() => setShowPWReq(false)}
                                    value={values.username}
                                />
                                <MyTextInput
                                    icon='mail'
                                    placeholder='Email Address'
                                    placeholderTextColor={colors.grey}
                                    onChangeText={handleChange('email')}
                                    onFocus={() => setShowPWReq(false)}
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
                                    onFocus={() => setShowPWReq(true)}
                                    value={values.password}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                {showPWReq && (
                                    <PWContainer>
                                        <PWRequirment>Needs at least 8 characters</PWRequirment>
                                    </PWContainer>
                                )}
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
                                {messageType == 'FAILED' && <MessageBox type={messageType}>{message}</MessageBox>}
                                {!isSubmitting && <StyledButton 
                                    disabled={ disableButton(values) }
                                    onPress={handleSubmit}
                                >
                                    <ButtonText>Sign Up</ButtonText>
                                </StyledButton >}
                                {isSubmitting && <StyledButton disabled={true}>
                                    <ActivityIndicator 
                                        size='large' 
                                        color={colors.white} />
                                </StyledButton>}
                                <Line />
                                <OtherView>
                                    <Text>Already have an account? </Text>
                                    <TouchableOpacity>
                                        <TextLink onPress={() => navigation.goBack()}>Sign In</TextLink>
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

const disableButton = (values) => {
    return (values.username.trim() == '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) || values.password.trim().length < 8);
};

export default RegisterScreen;