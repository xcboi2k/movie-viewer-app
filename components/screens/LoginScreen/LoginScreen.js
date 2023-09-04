import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import { ButtonContainer, FormContainer, FormViewContainer, HeaderHolder, LoginButton, LoginButtonText, LoginContainer, LoginInput, LoginTitle, Logo, LogoHolder } from './styles';
import ButtonText from '../../shared/ButtonText/ButtonText';
import TextInput from '../../shared/TextInput/TextInput';
import AppLogo from '../../../assets/images/MovieAppIcon.png'
import useAuthStore from '../../../stores/useAuthStore';
import { Alert } from 'react-native';
import useGetTokens from '../../../hooks/useGetTokens';

const LoginScreen = () => {
  const {requestToken, sessionID} = useGetTokens();

  const userData = useAuthStore((state) => state.user);
  const isLoginSuccess = useAuthStore((state) => state.isLoginSuccess);
  // const isSessionIDGenerated = useAuthStore((state) => state.isSessionIDGenerated);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const loginUser = useAuthStore((state) => state.loginUser);
  const getUserCredentials = useAuthStore((state) => state.getUserCredentials);

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
        if(isLoginSuccess){
          getUserCredentials(sessionID);
            if(isAuthenticated){
              Alert.alert('LOGIN SUCCESSFUL', 'You have successfully logged in your account.')
              resetForm();
            }
            else{
              Alert.alert('LOGIN FAILED', 'You have failed to logged in your account.')
            }
        }
        else{
          console.log('Login Unsuccessful')
        }
    };
  };

  console.log(userData);

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
          {/* <HeaderHolder>
            <LoginTitle>Login</LoginTitle>
          </HeaderHolder> */}
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
        </FormContainer>
    </LoginContainer>
  )
}

export default LoginScreen