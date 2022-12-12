import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Title, ButtonAdd } from './styles';

type ButtonProps = TouchableOpacityProps

export function Button({ ...rest } : ButtonProps) {
    return(
        <ButtonAdd 
            {...rest}
        >
            <Title>Adicionar item</Title>
        </ButtonAdd>
    );
}