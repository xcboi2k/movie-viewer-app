import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import { ButtonContainer, FormContainer, FormViewContainer, HeaderHolder, LoginButton, LoginButtonText, LoginContainer, LoginInput, LoginTitle, Logo, LogoHolder } from './styles';
import ButtonText from '../../shared/ButtonText/ButtonText';
import TextInput from '../../shared/TextInput/TextInput';
import AppLogo from '../../../assets/images/MovieAppIcon.png'
import useAuthStore from '../../../stores/useAuthStore';
import useValidateLogin from '../../../hooks/useValidateLogin';

const LoginScreen = () => {
  const userData = useAuthStore((state) => state.user)
  const loginUser = useAuthStore((state) => state.loginUser);
  const getSessionID = useAuthStore((state) => state.getSessionID);
  const getUserCredentials = useAuthStore((state) => state.getUserCredentials);

  const [requestToken, setRequestToken] = useState('');

  const initialValues = { username: "", password: ""};
  useEffect(() => {
    async function getRequestToken() {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJmOTNkODExMGM2MzM1OWY0YjM0MTc3YTc4ZTdlNyIsInN1YiI6IjY0ZjFkYTU5ZGJiYjQyMDExYjcxNDE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2flLbwPagHEBs2jaRnvKcNyAOzEXvB1LNA_7OD4pqT8`
          }
        };

        const response = await fetch(
            `https://api.themoviedb.org/3/authentication/token/new`,
            options
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const res = await response.json();
        console.log('REQUEST_TOKEN:', res.request_token);
        setRequestToken(res.request_token);

      } catch (error) {
          console.error('getRequestTokenError:', error);
      }
    }
    getRequestToken();
  }, []);

  const handleFormikSubmit = (values) => {
    if (values.username === "" || values.password === "") {
        Alert.alert("Incomplete Input", "Please fill up the username and password.");
    } else {
        const validateUser = useValidateLogin(
          {
            username: values.username,
            password: values.password,
            token: requestToken,
          }
        )
        // loginUser({
        //     username: values.username,
        //     password: values.password,
        //     token: requestToken,
        // });

        if(validateUser){
          
        }

        const sessionID = getSessionID(requestToken);
        console.log(sessionID);
        if(sessionID){
          getUserCredentials(sessionID);
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