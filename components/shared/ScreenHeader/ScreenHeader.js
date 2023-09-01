import React from 'react'
import { HeaderContainer, IconContainer, LeftButton, LogoContainer, RightButton } from './styles'
import { MaterialIcons } from '@expo/vector-icons';

const ScreenHeader = ({ leftIcon, onLeftPress, rightIcon, onRightPress }) => {
    return (
        <HeaderContainer>
            {
                leftIcon && <IconContainer setPosition="left">
                    <LeftButton onPress={onLeftPress}>
                        {leftIcon}
                    </LeftButton>
                </IconContainer>
            }
            <LogoContainer>
                <MaterialIcons name="local-movies" size={24} color="black" />
                {/* <Logo source={AppLogo} /> */}
            </LogoContainer>
            { 
                rightIcon && <IconContainer setPosition="right">
                    <RightButton onPress={onRightPress}>
                        {rightIcon}
                    </RightButton>
                </IconContainer>
            }
        </HeaderContainer>
    )
}

export default ScreenHeader