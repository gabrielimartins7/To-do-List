import styled from 'styled-components/native';
import { TextInput } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: #121015;
`;

export const Header = styled.SafeAreaView`
    width: 100%;
    height: 115px;
    background-color: #facc15;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const Title = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 18px;
`;

export const TitleNav = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 15px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
`;

export const InputForm = styled(TextInput)`
  width: 100%;
  padding: 18px 16px;
  font-size: 14px;
  color: #FFF;
  background-color: #1F1e25;
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const List = styled.View`
    margin-top: 20%;
`;