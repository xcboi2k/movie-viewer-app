import styled from 'styled-components/native';
import { Container } from '../../common/Styles';

export const LoginContainer = styled(Container)`
  position: relative;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

export const LogoHolder = styled.View`
    width: 85%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;
`;

export const Logo = styled.Image`
  /* Add your logo styles here */
    width: 250px;
    height: 45px;
`;

export const FormContainer = styled.View`
  width: 90%;
  padding: 40px;
`;

export const HeaderHolder = styled.View`
    width: 85%;
`;

export const LoginPrompt = styled.Text`
  color: white;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
`;