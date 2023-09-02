import React from 'react'
import PropTypes from "prop-types";

import { CustomInputContainer, CustomText, Input, InputContainer } from './styles';

const TextInput =  ({
    customLabel,
    inputProps,
    width = "100%",
    labelTextSize = '20px',
    color,
}) => {
    return (
        <CustomInputContainer width={width}>
            {customLabel && <CustomText labelTextSize={labelTextSize} textColor={color}>{customLabel}</CustomText>}
            <InputContainer>
                <Input {...inputProps} />
            </InputContainer>
        </CustomInputContainer>
    )
}

TextInput.propTypes = {
    customLabel: PropTypes.string,
    width: PropTypes.string,
    inputProps: PropTypes.object,
};

export default TextInput