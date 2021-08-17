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

export const MessageBox = styled.Text`
    color: ${colors.red};
    font-size: 15px;
    text-align: center;
    padding-bottom: 10px;
`;

export const StyledButton = styled.TouchableOpacity`
    border-radius: 5px;
    margin-bottom: 10px;
    height: 60px;
    justify-content: center;
    align-items: center;
    
    background-color: ${props => props.disabled ? colors.lightgrey : colors.secondary}
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
    margin-bottom: 15px;
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
    margin-bottom: 15px;
`;

export const PWContainer = styled.View`
    margin-top: -10px;
    padding-bottom: 25px;
`;

export const PWRequirment = styled.Text`
    color: ${colors.red};
    font-size: 16px;
    font-weight: bold;
`;

export const AgreementContainer = styled.View`
    padding-left: 20px;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ProfileView = styled.SafeAreaView`
    margin-horizontal: 20px;
    flex-direction: row;
`;

export const UsernameView = styled.View`
    margin: 20px;
`;

export const UserInfoView = styled.View`
    margin-top: 30px;
    margin-bottom: -15px;
    margin-left: 10%;
    flex-direction: row;
    align-items: center;
    width: 80%;
`;

export const UserInfoText = styled.Text`
    margin-left: 25px;
    margin-right: 10px;
    font-size: 18px;
`;

export const SettingView = styled.View`
    flex: 1;
    flex-direction: row-reverse;
    margin-vertical: 20px;
`;

export const EditView = styled.View`
    flex: 1;
    flex-direction: row-reverse;
`;

export const EditText = styled.Text`
    color: ${colors.tertiery};
    font-size: 18px;
`;

export const AddProfileImage = styled.View`
    flex-direction: column-reverse;
    margin-left: -20px;
`;

export const Loading = styled.ActivityIndicator`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    backgroundColor: rgba(0,0,0,0.6);
`;

export const SettingsHeader = styled.View`
    flex-direction: row;
    padding-horizontal: 10px;
`;

export const SettingsBackground = styled.SafeAreaView`
    background-color: ${colors.whitegrey};
    flex: 1;
`;

export const GroupLayout = styled.View`
    margin-top: 10px;
    background-color: ${colors.white};
`;

export const SettingsLayout = styled.TouchableOpacity`
    flex-direction: row;
    margin-vertical: 15px;
    padding-horizontal: 20px;
    
`;

export const Divider = styled.View`
    border-bottom-color: ${colors.whitegrey};
    border-bottom-width: 1px;
`;

export const SettingsText = styled.Text`
    padding-horizontal: 40px;
    font-size: 18px;
    color: ${colors.primary};
    text-align: center;
`;

export const LogoutContainer = styled.TouchableOpacity`
    align-items: center;
    margin-vertical: 15px;
`;
