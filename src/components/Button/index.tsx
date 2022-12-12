import React from 'react';

import { Title, ButtonAdd } from './styles';


export function Button({ onPress }) {
    return(
        <ButtonAdd 
            onPress={onPress}
        >
            <Title>Adicionar item</Title>
        </ButtonAdd>
    );
}