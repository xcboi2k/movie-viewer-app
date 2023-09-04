import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import ReviewItem from '../../shared/ReviewItem/ReviewItem';
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader';
import ButtonText from '../../shared/ButtonText/ButtonText';
import useAuthStore from '../../../stores/useAuthStore';
import useGetReviews from '../../../hooks/useGetReviews';
import { ActivityContainer, ButtonContainer, DetailsLabel, MovieContainer, MovieInfoContainer, MovieTitle, MovieTitleContainer, PosterImage, RatedMovieDetailsContainer, Ratings, RatingsContainer, RatingsDetailsContainer, ReviewListContainer, ReviewTitle, Summary, SummaryContainer, SummaryTitle } from './styles';
import useDeleteRating from '../../../hooks/useDeleteRating';

const RatedMoviesDetailsScreen = ({ navigation, route }) => {
  const { movie } = route.params;
  const sessionID = useAuthStore((state) => state.user.session_id)
  console.log(movie.id)
  console.log(userID)

  const {reviews, loading} = useGetReviews(movie.id)

  const deleteRating = () => {
    const movieID = movie.id
    useDeleteRating({movieID, sessionID})
  }

  return (
    <RatedMovieDetailsContainer>
      <ScreenHeader 
        leftIcon={ICON_NAMES.BACK}
        onLeftPress={() => navigation.goBack()}
      />
      <MovieContainer>
        <PosterImage source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}/>
        <MovieTitleContainer>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieInfoContainer>
            <RatingsContainer>
              <Ratings>Ratings:</Ratings>
              <RatingsDetailsContainer>
                <DetailsLabel>{movie.vote_average}</DetailsLabel>
                <AntDesign name="star" size={18} color="yellow" />
              </RatingsDetailsContainer>
            </RatingsContainer>
          </MovieInfoContainer>
          <MovieInfoContainer>
            <ActivityContainer>
              <ButtonContainer>
              <ButtonText text='Delete Rating' buttonColor='#58F5D9' textColor='#15191E' width='100%' textSize='16'
              onPress={deleteRating}/>
              </ButtonContainer>
            </ActivityContainer>
          </MovieInfoContainer>
        </MovieTitleContainer>
      </MovieContainer>
      <SummaryTitle>Summary</SummaryTitle>
      <SummaryContainer>
        <Summary>{movie.overview}</Summary>
      </SummaryContainer>
      <ReviewTitle>Reviews</ReviewTitle>
      <ReviewListContainer>
        { loading ? 
          <ActivityIndicator size="large" color="#58F5D9" />
          : 
          <FlatList
            data={reviews}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ReviewItem
                author={item.author}
                text={item.content}
                rating={item.author_details.rating}
              />
            )}
          />
        }
      </ReviewListContainer>
    </RatedMovieDetailsContainer>
  )
}

export default RatedMoviesDetailsScreen