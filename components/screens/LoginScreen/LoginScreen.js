import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native';
import { useFormik } from "formik";

import { ButtonContainer, FormContainer, LoginContainer, LoginPrompt, Logo, LogoHolder } from './styles';

import ButtonText from '../../shared/ButtonText/ButtonText';
import TextInput from '../../shared/TextInput/TextInput';
import AppLogo from '../../../assets/images/MovieAppIcon.png'

import useAuthStore from '../../../stores/useAuthStore';
import useGetTokens from '../../../hooks/useGetTokens';

const LoginScreen = () => {
  // const userData = useAuthStore((state) => state.user);
  // const validatedRequestToken = useAuthStore((state) => state.validatedRequestToken);
  // const sessionID = useAuthStore((state) => state.sessionID);

  const isLoginSuccess = useAuthStore((state) => state.isLoginSuccess);
  // const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  // const isSessionIDGenerated = useAuthStore((state) => state.isSessionIDGenerated);

  const loginUser = useAuthStore((state) => state.loginUser);
  // const getSessionID = useAuthStore((state) => state.getSessionID);
  // const getUserCredentials = useAuthStore((state) => state.getUserCredentials);

  const requestToken = useGetTokens();

  const [prompt, setPrompt] = useState('');

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

        if(isLoginSuccess === true){
          Alert.alert('LOGIN SUCCESSFUL', 'You have successfully logged in your account.')
          resetForm();
        }
        else{
          setPrompt('Invalid username and password')
        }

        // if(validatedRequestToken != null){
        //   getSessionID(validatedRequestToken);
        //   if(sessionID != null){
        //     getUserCredentials(sessionID);
        //     if(userData != null){
        //       Alert.alert('LOGIN SUCCESSFUL', 'You have successfully logged in your account.')
        //       resetForm();
        //     }
        //   }
        // }
        // else{
        //   setPrompt('Invalid username and password')
        // }
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
            <LoginPrompt>{prompt}</LoginPrompt>
            <ButtonContainer>
              <ButtonText text='Log In' buttonColor='#58F5D9' textColor='#15191E' width='60%' textSize='18'
                onPress={formik.handleSubmit}
              />
            </ButtonContainer>
        </FormContainer>
    </LoginContainer>
  )
}

export default LoginScreen