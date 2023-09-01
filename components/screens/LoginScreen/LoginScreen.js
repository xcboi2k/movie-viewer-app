import React from 'react'
import { useFormik } from "formik";
import { ButtonContainer, FormContainer, FormViewContainer, HeaderHolder, LoginButton, LoginButtonText, LoginContainer, LoginInput, LoginTitle } from './styles';
import ButtonText from '../../shared/ButtonText/ButtonText';
import TextInput from '../../shared/TextInput/TextInput';

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
        <HeaderHolder>
          <LoginTitle>Login</LoginTitle>
        </HeaderHolder>
        <FormViewContainer>
          <TextInput 
            inputProps={{
                placeholder: "Enter Email",
                onChangeText: formik.handleChange("email"),
                value: formik.values.email,
            }}
            customLabel="Email:"
            isBottomBorder={true}
          />
          <TextInput 
            inputProps={{
              placeholder: "Enter Password",
              onChangeText: formik.handleChange("password"),
              value: formik.values.password,
            }}
            customLabel="Password:"
            isBottomBorder={true}
          />
        </FormViewContainer>
        <ButtonContainer>
            <ButtonText text='Log In' buttonColor='#234791' textColor='#F4F6F8' width='60%' textSize='18'
              onPress={formik.handleSubmit}/>
          </ButtonContainer>
      </FormContainer>
    </LoginContainer>
  )
}

export default LoginScreen