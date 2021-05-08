import React from 'react';
import {PressableProps} from 'react-native';
import {Container, RestaurantNameText} from './styles';

// import { Container } from './styles';

interface RestaurantItem extends PressableProps {
  text: string;
}
const RestaurantItem: React.FC<RestaurantItem> = ({text, onPress}) => {
  return (
    <Container onPress={onPress}>
      <RestaurantNameText>{text}</RestaurantNameText>
    </Container>
  );
};

export default RestaurantItem;
