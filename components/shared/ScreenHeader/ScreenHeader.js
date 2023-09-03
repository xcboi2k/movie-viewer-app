import React from 'react'
import { HeaderContainer, IconContainer, LeftButton, Logo, LogoContainer, RightButton } from './styles'

import AppLogo from '../../../assets/images/MovieAppIcon.png'
import Icons from '../../common/Icons'

const ScreenHeader = ({ leftIcon, onLeftPress, rightIcon, onRightPress }) => {
    return (
        <HeaderContainer>
            {
                leftIcon && <IconContainer setPosition="left">
                    <LeftButton onPress={onLeftPress}>
                        <Icons name={leftIcon} color="#58F5D9" size={24}/>
                    </LeftButton>
                </IconContainer>
            }
            <LogoContainer>
                <Logo source={AppLogo} />
            </LogoContainer>
            { 
                rightIcon && <IconContainer setPosition="right">
                    <RightButton onPress={onRightPress}>
                        <Icons name={rightIcon} color="#58F5D9" size={24}/>
                    </RightButton>
                </IconContainer>
            }
        </HeaderContainer>
    )
}

export default ScreenHeader