import React, { useRef, useEffect } from 'react';
import { Animated, View } from 'react-native';

import {
    StyledImageBackground,
    LogoContainer,
    Logo,
    Slogan,
} from '../config/styles';

function LoadScreen(props) {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadePulse = () => {
        Animated.sequence([
            Animated.timing(
                fadeAnim, 
                { 
                    toValue: 1, 
                    duration: 1500, 
                    useNativeDriver: true 
                }),
            Animated.timing(
                fadeAnim, 
                { 
                    toValue: 0.7,
                    duration: 1500, 
                     useNativeDriver: true })
        ]).start(() => fadePulse());  
    };

    useEffect(() => {
        fadePulse();
    }, [])

    return (
        <LogoContainer>
            <Animated.View style={{
                opacity: fadeAnim,
                transform: [
                    {
                        translateY: fadeAnim.interpolate({
                            inputRange: [0.4, 1],
                            outputRange: [20, 0],
                        }),
                    },
                    {
                        translateX: fadeAnim.interpolate({
                            inputRange: [0.4, 1],
                            outputRange: [-10, 10],
                        }),
                    }
                ],
            }}>
                <Logo source={require("../assets/logo.png")}></Logo>
            </Animated.View>
            {/* <Slogan>
                Enjoy Duty Free Everywhere
            </Slogan> */}
        </LogoContainer>
    );
}

export default LoadScreen;