import React from 'react'
import { useFormik } from "formik";
import { ButtonContainer, FormContainer, FormViewContainer, HeaderHolder, LoginButton, LoginButtonText, LoginContainer, LoginInput, LoginTitle, Logo, LogoHolder } from './styles';
import ButtonText from '../../shared/ButtonText/ButtonText';
import TextInput from '../../shared/TextInput/TextInput';
import AppLogo from '../../../assets/images/MovieAppIcon.png'

const LoginScreen = () => {
  const initialValues = { email: "", password: "" };
  const handleFormikSubmit = (values) => {
    if (values.email === "" || values.password === "") {
        Alert.alert("Incomplete Input", "Please fill up the email and password.");
    } else {
        // verifyUser({
        //     email: values.email,
        //     password: values.password
        // });
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
          {/* <HeaderHolder>
            <LoginTitle>Login</LoginTitle>
          </HeaderHolder> */}
          <TextInput 
              inputProps={{
                  placeholder: "Enter Username",
                  onChangeText: formik.handleChange("email"),
                  value: formik.values.email,
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
              <ButtonText text='Log In' buttonColor='#58F5D9' textColor='#F4F6F8' width='60%' textSize='18'/>
            </ButtonContainer>
        </FormContainer>
    </LoginContainer>
  )
}

export default LoginScreen