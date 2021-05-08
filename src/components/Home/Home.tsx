import React, {useState, useEffect} from 'react';
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
import Requests from '../../Utils/Requests';
import {IRestaurantData} from './../../Interfaces';
const Home: React.FC = () => {
  const [restaurantList, setRestaurantsList] = useState<IRestaurantData>();

  const obtainRestaurantsList = async () => {
    const restaurantObtained = await Requests.obtainRestaurants(1);
    setRestaurantsList(restaurantObtained);
  };

  useEffect(() => {
    obtainRestaurantsList();
  }, []);
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
      data={restaurantList}
      columnWrapperStyle={{justifyContent: 'space-around'}}
      ItemSeparatorComponent={() => <View style={{marginVertical: 10}} />}
      renderItem={({item}) => (
        <RestaurantItem imageSource={item.image} text={item.name} />
      )}
    />
  );
};

export default Home;
