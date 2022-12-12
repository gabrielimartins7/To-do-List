import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Button';
import { Item } from '../../components/Item';

import { Container, Header, Title, Form, InputForm, List, TitleNav } from './styles';

interface ItemData {
  id: string;
  name: string;
}

export default function Home() {
  const [item, setItem] = useState('');
  const [meusItens, setMeusItens] = useState<ItemData[]>([]);

  function handleAddItem(){
    const data = {
      id: String(new Date().getTime()),
      name: item
    }
    setMeusItens([...meusItens, data]);
  }

  function handleRemoveItem(id: string){
    setMeusItens(oldState => oldState.filter(
      item => item.id !== id
    ));
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
        <Button 
          onPress={handleAddItem}
          activeOpacity={0.7}
        />
        
        <List>
            <Title>Itens listados</Title>
            <FlatList
              data={meusItens}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Item 
                  list={item.name}
                  onPress={() => handleRemoveItem(item.id)}
                />
              )}
            />
        </List>
      </Form>
    </Container>
  );
}
