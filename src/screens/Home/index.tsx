import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Item } from '../../components/Item';

import { Container, Header, Title, Form, InputForm, List, TitleNav } from './styles';

export default function Home() {
  const [item, setItem] = useState('');
  const [meusItens, setMeusItens] = useState([]);

  function handleAddItem(){
    setMeusItens([...meusItens, item]);
  }

  return (
    <Container>
      <Header>
        <TitleNav>Lista</TitleNav>
      </Header>
      <Form>
        <InputForm
            placeholder='Novo item'
            placeholderTextColor="#555"
            onChangeText={setItem}
        />
        <Button onPress={handleAddItem} />
        
        <List>
            <Title>Itens listados</Title>
            {
                meusItens.map(list => (
                   <Item list={list}/> 
                ))
            }
        </List>
      </Form>
    </Container>
  );
}
