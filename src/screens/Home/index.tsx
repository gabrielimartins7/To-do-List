import React, { useState } from 'react';

import { Container, Header, Title, Form, InputForm, ButtonAdd, List, ItemList, Item } from './styles';

export default function Home() {
  const [item, setItem] = useState('');
  const [meusItens, setMeusItens] = useState([]);

  function handleAddItem(){
    setMeusItens([...meusItens, item]);
  }

  return (
    <Container>
      <Header>
        <Title>Lista</Title>
      </Header>
      <Form>
        <InputForm
            placeholder='Novo item'
            placeholderTextColor="#555"
            onChangeText={setItem}
        />
        <ButtonAdd onPress={handleAddItem}>
            <Title>Adicionar item</Title>
        </ButtonAdd>
        <List>
            <Title>Itens listados</Title>
            {
                meusItens.map(list => (
                    <ItemList key={list}>
                        <Item>{list}</Item>
                    </ItemList>
                ))
            }
        </List>
      </Form>
    </Container>
  );
}
