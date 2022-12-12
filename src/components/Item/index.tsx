import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ItemList, ItemUni } from './styles';

interface ListProps extends TouchableOpacityProps {
    list: string;
}

export function Item({ list, ...rest } : ListProps) {
    return(
        <ItemList {...rest} >
            <ItemUni>{list}</ItemUni>
        </ItemList>
    );
}