import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
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

function PostScreen(props) {
    const [choseCategory, setChoseCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState();

    const handleLogin = (credentials, setSubmitting, resetForm) => {
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

    return (
        <PostContainer>
            <FormContainer>
                <Formik
                    initialValues={{ category: '', title: '', description: '', location: '' }}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                            handleSubmit(values, setSubmitting, resetForm);
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