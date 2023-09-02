import styled from 'styled-components/native';
import { Container } from '../../common/Styles';

export const MovieDetailsContainer = styled(Container)`
  position: relative;
  flex: 1;
  justify-content: flex-start;
    padding-bottom: 20px;
`;

export const PosterImage = styled.Image`
  width: 100%;
  height: 300px;
`;

export const MovieTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
  color: #58F5D9;
`;

export const Summary = styled.Text`
  font-size: 16px;
  margin-bottom: 15px;
  color: #58F5D9;
`;

export const DetailsLabel = styled.Text`
  font-weight: bold;
  color: #58F5D9;
`;

export const Ratings = styled.Text`
  font-size: 16px;
  margin-bottom: 15px;
  color: #58F5D9;
`;

export const ReviewTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #58F5D9;
`;

export const ReviewListContainer = styled.View`
    flex: 1;
`;