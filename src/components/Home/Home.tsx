import React from 'react';
import {Text} from 'react-native';
import {
  Container,
  BackgroundImage,
  HomeRestaurantList,
  DiscoverNewTastesText,
  HereWeTalksAboutOurProposalText,
} from './styles';
import Images from '../../Utils/Images';
const Home: React.FC = () => {
  return (
    <Container bounces={false} contentContainerStyle={{flex: 1}}>
      <BackgroundImage source={Images.homeBackground}>
        <DiscoverNewTastesText>
          Descubra novos {'\n'}sabores
        </DiscoverNewTastesText>
        <HereWeTalksAboutOurProposalText>
          Aqui eu converso com você sobre {'\n'}nossa proposta
        </HereWeTalksAboutOurProposalText>
      </BackgroundImage>
      <HomeRestaurantList />
    </Container>
  );
};

export default Home;
