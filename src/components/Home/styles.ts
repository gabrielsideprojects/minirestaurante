import styled from 'styled-components/native';
import colors from './../../Utils/Colors';
export const Container = styled.ScrollView`
  flex: 1;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  padding-top: 20px;
  padding-left: 20px;
`;
export const DiscoverNewTastesText = styled.Text`
  font-size: 24px;
  color: ${colors.black};
  font-weight: 600;
  margin-top: 10px;
`;
export const HereWeTalksAboutOurProposalText = styled.Text`
  font-size: 20px;
  color: ${colors.black};
  font-weight: 200;
  margin-top: 20px;
`;
export const HomeRestaurantList = styled.View`
  flex: 2;
  border-radius: 25px;
  border-width: 1px;
  border-color: ${colors.white};
  background-color: ${colors.white};
  margin-top: -20px;
`;
