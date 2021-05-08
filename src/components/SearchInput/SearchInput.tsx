import React from 'react';
import {PressableProps} from 'react-native';
import {
  Container,
  SearchIcon,
  FindARestauranteText,
} from './../SearchInput/styles';
import Images from './../../Utils/Images';
export interface SearchInputProps extends PressableProps {
  isInputEditable: boolean;
  onChangeText: (text: string) => string;
}
const SearchInput: React.FC<SearchInputProps> = ({
  isInputEditable,
  onPress,
  onChangeText,
}) => {
  return (
    <Container onPress={onPress}>
      <SearchIcon source={Images.searchIcon} />
      <FindARestauranteText
        onChangeText={onChangeText}
        editable={isInputEditable}
        placeholder={'Encontre um restaurante'}
      />
    </Container>
  );
};

export default SearchInput;
