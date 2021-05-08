import styled from 'styled-components/native';
import colors from './../../Utils/Colors';

export const Container = styled.Pressable`
  width: 100%;
  height: 50px;
  border-color: ${colors.lightGray};
  border-width: 1px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

export const SearchIcon = styled.Image`
  width: 20px;
  height: 20px;
`;
export const FindARestauranteText = styled.TextInput`
  color: ${colors.dark};
  padding-left: 10px;
`;
