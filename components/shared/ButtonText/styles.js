import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    width: ${({ width }) => width};
    padding: 15px;
    background-color: ${({ buttonColor }) => buttonColor};
    border-radius: 20px;
    /* flex-direction: row;
    align-items: center; */
`;

export const ButtonLabel = styled.Text`
    font-size: ${({ textSize }) => textSize}px;
    text-align: center;
    font-weight: bold;
    color: ${({ textColor }) => textColor};
`;