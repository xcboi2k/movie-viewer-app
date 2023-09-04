import styled from 'styled-components/native';
import { Container } from '../../common/Styles';

export const MovieDetailsContainer = styled(Container)`
  position: relative;
  flex: 1;
  justify-content: flex-start;
  padding-bottom: 20px;
`;

export const PosterImage = styled.Image`
  width: 55%;
  height: 250px;
  margin-right: 10px;
  object-fit: contain;
`;

export const MovieContainer = styled.View`
  width: 90%;
  flex-direction: row;
`

export const MovieTitleContainer = styled.View`
  width: 45%;
  margin-right: 10px;
`

export const MovieTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const MovieInfoContainer = styled.View`
  width: 100%;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const RatingsContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const RatingsDetailsContainer = styled.View`
  flex-direction: row;
  margin-left: 10px;
`;

export const DetailsLabel = styled.Text`
  font-size: 16px;
  color: #FFFFFF;
  margin-right: 5px;
`;

export const Ratings = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #58F5D9;
`;

export const ActivityContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  margin-top: 5px;
`;

export const SummaryContainer = styled.ScrollView`
  width: 90%;
  margin-top: 5px;
  height: 100px;
`;

export const SummaryTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #58F5D9;
  margin-top: 10px;
`;

export const Summary = styled.Text`
  font-size: 14px;
  color: #FFFFFF;
`;

export const ReviewTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #58F5D9;
`;

export const ReviewListContainer = styled.View`
  height: 250px;
`;