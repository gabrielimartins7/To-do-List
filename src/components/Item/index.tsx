import React from 'react';

import { ItemList, ItemUni } from './styles';


export function Item({ list }) {
    return(
        <ItemList key={list} >
            <ItemUni>{list}</ItemUni>
        </ItemList>
    );
}