import React from 'react'
import { HeaderContainer, IconContainer, LeftButton, Logo, LogoContainer, RightButton } from './styles'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import AppLogo from '../../../assets/images/MovieAppIcon.png'

const ScreenHeader = ({ leftIcon, onLeftPress, rightIcon, onRightPress }) => {
    return (
        <HeaderContainer>
            {
                leftIcon && <IconContainer setPosition="left">
                    <LeftButton onPress={onLeftPress}>
                        {rightIcon}
                    </LeftButton>
                </IconContainer>
            }
            <LogoContainer>
                <Logo source={AppLogo} />
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