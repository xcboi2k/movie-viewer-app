import styled from 'styled-components/native';

export const LoginContainer = styled.View`
  position: relative;
  flex: 1;
  justify-content: flex-start;
  padding-bottom: 20px;
  width: 100%;
`;

export const FormContainer = styled.View`
    padding: 40px;
`;

export const HeaderHolder = styled.View`
    width: 85%;
`;

export const LoginTitle = styled.Text`
  color: #153A56;
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FormViewContainer = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const LoginInput = styled.TextInput`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 16px;
  border-radius: 5px;
`;

export const ButtonContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 40%;
  background-color: #007bff;
  padding: 15px;
  border-radius: 5px;
`;

export const LoginButtonText = styled.Text`
  color: #F4F6F8;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;