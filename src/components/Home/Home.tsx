import React from 'react';
import {FlatList, View} from 'react-native';
import {
  Container,
  BackgroundImage,
  HomeRestaurantList,
  DiscoverNewTastesText,
  HereWeTalksAboutOurProposalText,
  RestaurantTextTitle,
} from './styles';
import Images from '../../Utils/Images';
import SearchInput from './../SearchInput/SearchInput';
import RestaurantItem from './../RestaurantItem/RestaurantItem';

interface restaurante {
  text: string;
}

const Home: React.FC = () => {
  const arr: restaurante[] = [
    {text: 'Mamma mia'},
    {text: 'Teste'},
    {text: 'Teste'},
    {text: 'Teste'},
    {text: 'Teste'},
  ];
  return (
    <FlatList
      bounces={false}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 20, backgroundColor: 'white'}}
      ListHeaderComponent={() => (
        <Container>
          <BackgroundImage source={Images.homeBackground}>
            <DiscoverNewTastesText>
              Descubra novos {'\n'}sabores
            </DiscoverNewTastesText>
            <HereWeTalksAboutOurProposalText>
              Aqui eu converso com você sobre {'\n'}nossa proposta
            </HereWeTalksAboutOurProposalText>
          </BackgroundImage>
          <HomeRestaurantList>
            <SearchInput isInputEditable={false} />
            <RestaurantTextTitle>Restaurantes</RestaurantTextTitle>
          </HomeRestaurantList>
        </Container>
      )}
      data={arr}
      columnWrapperStyle={{justifyContent: 'space-around'}}
      ItemSeparatorComponent={() => <View style={{marginVertical: 10}} />}
      renderItem={({item}) => <RestaurantItem text={item.text} />}
    />
  );
};

export default Home;
