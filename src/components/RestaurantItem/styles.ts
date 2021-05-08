import styled from 'styled-components/native';
import colors from './../../Utils/Colors';
import {normalizeWidPx} from './../../Utils/FnUtils';
export const Container = styled.Pressable`
  width: ${normalizeWidPx(140)};
  height: 140px;
  justify-content: flex-end;
  border-radius: 10px;
  border-color: transparent;
`;
export const RestaurantImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  padding-bottom: 15px;
  padding-left: 10px;
  overflow: hidden;
  border-radius: 10px;
`;
export const RestaurantNameText = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
`;
