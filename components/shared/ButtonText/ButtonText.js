import React from 'react'
import { ButtonContainer } from '../../screens/LoginScreen/styles'
import { ButtonLabel } from './styles'

const ButtonText = ({text, onPress, width = "100%", textSize, buttonColor, textColor}) => {
    return (
        <ButtonContainer 
            onPress={onPress}
            width={width}
            buttonColor={buttonColor}
        >
            <ButtonLabel textSize={textSize} textColor={textColor}>{text}</ButtonLabel>
        </ButtonContainer>
    )
}

export default ButtonText