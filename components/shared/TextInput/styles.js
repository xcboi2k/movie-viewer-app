import styled, { css } from "styled-components/native";

export const InputContainer = styled.View`
    elevation: 5;
    width: 100%;
    background-color: ${'#FFFFFF'};
    border-radius: 5px;
    position: relative;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    padding-left: 5px;
    /* padding-right: ${({ iconName }) => (iconName ? "20px" : "5px")}; */
    margin-bottom: 20px;
`;

export const Input = styled.TextInput`
    padding: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 8px;
    font-size: 16px;
    flex: 1;
    /* margin-right: ${({ iconName }) => (iconName ? "20px" : "0px")}; */
`;

export const CustomInputContainer = styled.View`
    width: ${({ width }) => width};
`;

export const CustomText = styled.Text`
    font-weight: bold;
    color:  ${({ textColor }) => textColor};
    font-size: ${({ labelTextSize }) => labelTextSize};
    margin-bottom: 5px;
`;