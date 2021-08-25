import React, { useState } from 'react';
import { ActivityIndicator, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
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
    MessageBox,
    StyledButton,
    ButtonText,
    Line,
    ThirdPartyContainer,
    ThirdPartyButton,
    OtherView,
    PWRecoveryView,
    TextLink
} from '../config/styles';

// API client
import axios from 'axios';


function LoginScreen({ navigation }) {

    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const handleLogin = (credentials, setSubmitting, resetForm) => {
        handleMessage(null);
        const url = 'https://secret-cove-40177.herokuapp.com/user/signin';

        axios.post(url, credentials).then((response) => {
            const {status, message, data} = response.data;
            if (status != 'SUCCESSFUL') {
                handleMessage(message, status);
                setSubmitting(false);
            } else {
                navigation.navigate('Profile', {...data[0]});
                setSubmitting(false);
                resetForm({ values: '' });
            }
        }).catch(err =>{
            console.log(err);
            setSubmitting(false);
            handleMessage('An error occurred. Check you network and try again!', 'FAILED');
        })
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
                <SubTitle>Login</SubTitle>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        handleLogin(values, setSubmitting, resetForm);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
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
                                        <TextLink>Forgot Password?</TextLink>
                                    </TouchableOpacity>
                                </PWRecoveryView>
                                {messageType == 'FAILED' && <MessageBox type={messageType}>{message}</MessageBox>}
                                {!isSubmitting && <StyledButton 
                                    disabled={ disableButton(values) }
                                    onPress={handleSubmit}
                                >
                                    <ButtonText>Login</ButtonText>
                                </StyledButton >}
                                {isSubmitting && <StyledButton disabled={true}>
                                    <ActivityIndicator 
                                        size='large' 
                                        color={colors.white} />
                                </StyledButton>}
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

const disableButton = (values) => {
    return (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) || values.password.trim().length < 8);
};

export default LoginScreen;