import styled from 'styled-components';

import colors from './colors'

export const StyledImageBackground = styled.ImageBackground`
    flex: 1;
    align-items: center;
    padding-top: 100px;
`;

export const LogoContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
`;

export const Logo = styled.Image`
    width: 250px;
    height: 250px;
`;

export const Slogan = styled.Text`
    font-size: 16px;
    font-style: italic;
    padding-bottom: 40px;
    color: ${colors.primary};
`;

export const SubTitle = styled.Text`
    fontSize: 20px;
    letter-spacing: 0.5px;
    font-weight: bold;
    margin-bottom: 20px;
    color: ${colors.primary};
`;

export const FormContainer = styled.View`
    width: 80%;
    height: 50%;
`;

export const StyledTextInput = styled.TextInput`
    backgroundColor: ${colors.white};
    padding-left: 55px;
    padding-right: 90px;
    margin-bottom: 20px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    color: ${colors.primary};
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 15px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 50px;
    top: 15px;
    position: absolute;
    z-index: 1; 
`;

export const StyledButton = styled.TouchableOpacity`
    border-radius: 5px;
    margin-bottom: 10px;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.secondary};
`;

export const ButtonText = styled.Text`
    color: ${colors.white};
    font-size: 16px;

    ${(props) => props.thirdParty == true && `
        padding-left: 15px;
    `}
`;

export const Line = styled.View`
    border-bottom-color: ${colors.darkGrey};
    border-bottom-width: 1px;
    margin-bottom: 10px;
`;

export const ThirdPartyContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ThirdPartyButton = styled.TouchableOpacity`
    border-radius: 5px;
    margin-bottom: 10px;
    height: 60px;
    width: 45%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${colors.tertiery};
`;

export const OtherView = styled.View`
    flex-direction: row;    
    justify-content: center;
`;

export const PWRecoveryView = styled.View`
    flex-direction: row-reverse;  
    margin-top: 5px;  
    margin-top: -15px;
    margin-bottom: 15px;
`;

export const TextLink = styled.Text`
    color: ${colors.secondary};
`;

export const TermsNConditions = styled.View`
    flex-direction: row;
    margin-top: -10px;
    margin-bottom: 20px;
`;

export const AgreementContainer = styled.View`
    padding-left: 20px;
    flex-direction: row;
    flex-wrap: wrap;
`;