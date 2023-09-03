import React from 'react'
import { HeaderContainer, IconContainer, LeftButton, Logo, LogoContainer, RightButton } from './styles'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import AppLogo from '../../../assets/images/MovieAppIcon.png'

const ScreenHeader = ({ leftIcon, onLeftPress, rightIcon, onRightPress }) => {
    return (
        <HeaderContainer>
            {
                <IconContainer setPosition="left">
                    <LeftButton onPress={onLeftPress}>
                        <Ionicons name="chevron-back" size={30} color="#58F5D9" />
                    </LeftButton>
                </IconContainer>
            }
            <LogoContainer>
                <Logo source={AppLogo} />
            </LogoContainer>
            { 
                <IconContainer setPosition="right">
                    <RightButton onPress={onRightPress}>
                        <MaterialIcons name="watch-later" size={30} color="#58F5D9" />
                    </RightButton>
                </IconContainer>
            }
        </HeaderContainer>
    )
}

export default ScreenHeader