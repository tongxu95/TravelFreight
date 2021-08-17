import React, { useState }  from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

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
    EditText, 
    AddProfileImage,
    Loading
} from '../config/styles';

// API client
import axios from 'axios';


function ProfileScreen({ navigation, route} ) {

    const {_id, username, email, img, location} = route.params;

    const [addr, setAddr] = useState(location);

    const [image, setImage] = useState(img);

    const [isLoading, setIsLoading] = useState(false);

    const addProfileImage = async () => {
        setIsLoading(true);
        await pickImage();
        setIsLoading(false);
    }

    const pickImage = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Please enable camera roll access to continue!');
            }
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            const profileImg = result.uri;
            const url = 'https://secret-cove-40177.herokuapp.com/user/update/img';

            const update = {
                _id: _id,
                img: profileImg
            };

            axios.post(url, update).then((response) => {
                const {status, message} = response.data;
                if (status != 'SUCCESS') {
                    console.log(message, status);
                } 
            }).catch(err =>{
                console.log(err);
            })

            setImage(profileImg);
        }
    };


    const addLoc = async () => {
        setIsLoading(true);
        await setLoc();
        setIsLoading(false);
    }

    const setLoc = async () => {
        const enabled = await Location.hasServicesEnabledAsync();
        if (!enabled) {
            Alert.alert('Please enable your location services to continue!');
        } else {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Allow the app to use location service to continue.');
            } else {
                const { coords } = await Location.getCurrentPositionAsync();

                if (coords) {
                    const { latitude, longitude } = coords;
                    let response = await Location.reverseGeocodeAsync({
                        latitude,
                        longitude
                    });
                    for (const item of response) {
                        const address = `${item.city}, ${item.region}, ${item.country}`;

                        const url = 'https://secret-cove-40177.herokuapp.com/user/update/location';

                        const update = {
                            _id: _id,
                            location: address
                        };

                        axios.post(url, update).then((response) => {
                            const {status, message} = response.data;
                            if (status != 'SUCCESS') {
                                console.log(message, status);
                            } 
                        }).catch(err =>{
                            console.log(err);
                        })

                        setAddr(address);
                    }
                }
            }
        }
    };


    return (
        <View style={{flex:1}}>
            <ProfileView>
                {(image == '') && 
                    <Avatar.Image 
                        source={require('../assets/blank-profile-picture.png')} 
                        size={80}  
                    />
                }
                {(image != '') && 
                    <Avatar.Image
                        source={{ uri: image }} 
                        size={80}
                    />
                }
                <AddProfileImage>
                    <TouchableOpacity onPress={addProfileImage}>
                        <Ionicons name='add-circle' size={30} color={colors.darkGrey}/>                        
                    </TouchableOpacity>
                </AddProfileImage>
                <UsernameView>
                    <SubTitle>{username}</SubTitle>
                    {/* <SubTitle>Username</SubTitle> */}
                </UsernameView>
                <SettingView>
                    <Ionicons name='settings-outline' size={25} colors={colors.secondary} onPress={() => navigation.navigate('Settings')}/>
                </SettingView>
            </ProfileView>
            <UserInfoView>
                <Ionicons name='mail-outline' size={25} color={colors.primary}/>
                <UserInfoText>{email}</UserInfoText>
                {/* <UserInfoText>Email</UserInfoText> */}
            </UserInfoView>
            <UserInfoView>
                <Ionicons name='location-outline' size={25} color={colors.primary}/>
                <View style={{width: '80%'}}>
                    <UserInfoText>{addr}</UserInfoText>
                </View>
                <EditView>
                    <TouchableOpacity onPress={addLoc}>
                        <EditText>{(addr == '') ? 'Add' : 'Edit'}</EditText>
                    </TouchableOpacity>
                </EditView>
            </UserInfoView>
            <View style={{paddingTop: 40}}>
                <Line />
            </View>
            {isLoading &&
                <Loading size='large'/>
            }
        </View>

    );
}

export default ProfileScreen;