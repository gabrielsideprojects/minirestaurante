import styled from 'styled-components/native';
import colors from './../../Utils/Colors';
import {normalizeWidPx} from './../../Utils/FnUtils';
export const Container = styled.Pressable`
  width: ${normalizeWidPx(140)};
  height: 140px;
  border-width: 1px;
  border-radius: 10px;
  justify-content: flex-end;
  padding-bottom: 10px;
  padding-left: 10px;
`;

export const RestaurantNameText = styled.Text`
  color: ${colors.black};
  font-size: 12px;
`;
