import React, { useState, useEffect } from 'react'
import { Alert, ActivityIndicator } from 'react-native';
import { useFormik } from "formik";

import { ButtonContainer, FormContainer, LoginContainer, LoginPrompt, Logo, LogoHolder } from './styles';

import ButtonText from '../../shared/ButtonText/ButtonText';
import TextInput from '../../shared/TextInput/TextInput';
import AppLogo from '../../../assets/images/MovieAppIcon.png'

import useAuthStore from '../../../stores/useAuthStore';
import useGetTokens from '../../../hooks/useGetTokens';

const LoginScreen = () => {
  const loginUser = useAuthStore((state) => state.loginUser);
  const prompt = useAuthStore((state) => state.prompt);
  const loading = useAuthStore((state) => state.isLoading);

  const requestToken = useGetTokens();

  const initialValues = { username: "", password: ""};

  const handleFormikSubmit = (values, { resetForm }) => {
    if (values.username === "" || values.password === "") {
        Alert.alert("Incomplete Input", "Please fill up the username and password.");
    } else {
        loginUser({
            username: values.username,
            password: values.password,
            token: requestToken,
        });
    };
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleFormikSubmit,
  });

  return (
    <LoginContainer>
        <FormContainer>
          <LogoHolder>
            <Logo source={AppLogo}/>
          </LogoHolder>
          <TextInput 
              inputProps={{
                placeholder: "Enter Username",
                onChangeText: formik.handleChange("username"),
                value: formik.values.username,
              }}
              customLabel="Username:"
              isBottomBorder={true}
              color='#58F5D9'
            />
            <TextInput 
              inputProps={{
                placeholder: "Enter Password",
                onChangeText: formik.handleChange("password"),
                value: formik.values.password,
              }}
              customLabel="Password:"
              isBottomBorder={true}
              color='#58F5D9'
            />
            <ButtonContainer>
              <ButtonText text='Log In' buttonColor='#58F5D9' textColor='#15191E' width='60%' textSize='18'
                onPress={formik.handleSubmit}
              />
            </ButtonContainer>
            <LoginPrompt>{prompt}</LoginPrompt>
            {loading ? (
                <ActivityIndicator size="large" color="#58F5D9" />
            ) : null }
        </FormContainer>
    </LoginContainer>
  )
}

export default LoginScreen