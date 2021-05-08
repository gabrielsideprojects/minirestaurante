import React from 'react';
import {PressableProps, ImageBackground, View} from 'react-native';
import {Container, RestaurantNameText, RestaurantImage} from './styles';

// import { Container } from './styles';

interface RestaurantItem extends PressableProps {
  text: string;
  imageSource: string;
}
const RestaurantItem: React.FC<RestaurantItem> = ({
  text,
  onPress,
  imageSource,
}) => {
  return (
    <Container onPress={onPress}>
      <View style={{borderRadius: 10, overflow: 'hidden'}}>
        <RestaurantImage resizeMode={'stretch'} source={{uri: imageSource}}>
          <RestaurantNameText>{text}</RestaurantNameText>
        </RestaurantImage>
      </View>
    </Container>
  );
};

export default RestaurantItem;
