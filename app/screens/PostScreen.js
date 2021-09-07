import React, { useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import { FontAwesome } from '@expo/vector-icons';

import colors from '../config/colors';
import {
    FormContainer,
    RightIcon,
    StyledButton,
    ButtonText,
    PostContainer,
    StyledLabel,
    SingleLineInput,
    MultiLineInput,
    CategoryContainer,
    CategoryText
} from '../config/styles';

import axios from 'axios';

function PostScreen({navigation, route}) {
    const {_id, username, email, img, location} = route.params;
    const [choseCategory, setChoseCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState();

    const handlePost = (data, setSubmitting, resetForm) => {
        const url = 'https://secret-cove-40177.herokuapp.com/post/';

        const today = new Date();
        const posting = {
            user: username,
            ...data,
            date: today
        };
        console.log(posting);
        
        axios.post(url, posting).then((response) => {
            const {status, message, data} = response.data;
            if (status != 'SUCCESS') {
                createAlert(message, status);
                setSubmitting(false);
            } else {
                createAlert(message, status);
                setSubmitting(false);
                resetForm({ values: '' });
            }
        }).catch(err =>{
            console.log(err);
            setSubmitting(false);
            createAlert('An error occurred. Check you network and try again!', 'FAILED');
        })
    };

    const createAlert = (message, status) => {
        Alert.alert(
            status,
            message,
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    return (
        <PostContainer>
            <FormContainer>
                <Formik
                    initialValues={{ category: '', title: '', description: '', location: '' }}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                            handlePost(values, setSubmitting, resetForm);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (

                        <View style={{flex:1}}>
                            <StyledLabel>Category</StyledLabel>
                            <CategoryContainer>
                                <CategoryText>{selectedCategory}</CategoryText>
                                <RightIcon onPress={() => {setChoseCategory(! choseCategory)}}>
                                    <FontAwesome
                                        name='angle-down'
                                        size={30}
                                        color={colors.grey}
                                    />
                                </RightIcon>
                            </CategoryContainer>
                            <StyledLabel>Title</StyledLabel>
                            <SingleLineInput
                                onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                                value={values.title}
                            />
                            <StyledLabel>Description</StyledLabel>
                            <MultiLineInput
                                onChangeText={handleChange('description')}
                                onBlur={handleBlur('description')}
                                value={values.description}
                                multiline={true}
                            />
                            <StyledLabel>Location</StyledLabel>
                            <SingleLineInput
                                onChangeText={handleChange('location')}
                                onBlur={handleBlur('location')}
                                value={values.location}
                            />
                            {!isSubmitting && <StyledButton 
                                disabled={ disableButton(values) }
                                onPress={handleSubmit}
                            >
                                <ButtonText>Post</ButtonText>
                            </StyledButton >}
                            {isSubmitting && <StyledButton disabled={true}>
                                <ActivityIndicator 
                                    size='large' 
                                    color={colors.white} />
                            </StyledButton>}
                            {choseCategory &&
                                <Picker
                                    style= {{ position: 'absolute', bottom: 0, left: 0, right: 0}}
                                    selectedValue={selectedCategory}
                                    onValueChange={(itemValue, itemIndex) => {
                                            setSelectedCategory(itemValue);
                                            setChoseCategory(false);
                                            values.category = itemValue;
                                    }}
                                >
                                    <Picker.Item label="" value="" />
                                    <Picker.Item label="BABY" value="BABY" />
                                    <Picker.Item label="LUXURY" value="LUXURY" />
                                    <Picker.Item label="ELECTRONIC" value="ELECTRONIC" />
                                </Picker>
                            }
                        </View>
                    )}
                </Formik>
            </FormContainer>
        </PostContainer>
    );
}

const disableButton = (values) => {
    return values.category.trim() == ''  || values.title.trim() == '' || values.description.trim() == '' || values.location.trim() == '';
};

export default PostScreen;