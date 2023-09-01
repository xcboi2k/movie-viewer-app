import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 16px;
    width: 90%;
`;

export const LogoContainer = styled.View`
    flex: 2;
    align-items: center;
`;

export const Logo = styled.Image`
  /* Add your logo styles here */
    width: 50px;
    height: 50px;
`;

export const LeftButton = styled.TouchableOpacity`
    padding: 5px;
`;

export const RightButton = styled.TouchableOpacity`
    padding: 5px;
`;

export const IconContainer = styled.View`
    flex: 0; /* Prevent the icon from taking extra space */
    margin-right: ${({ setPosition }) => (setPosition === 'left' ? 'auto' : 0)};
    margin-left: ${({ setPosition}) => (setPosition === 'right' ? 'auto' : 0)};
    align-items: center;
`;