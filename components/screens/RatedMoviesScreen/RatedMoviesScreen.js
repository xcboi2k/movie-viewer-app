import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import { RatedMoviesContainer, RatedMoviesHeader, RatedMoviesHeaderContainer, RatedMoviesSection } from './styles'
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import MovieItem from '../../shared/MovieItem/MovieItem';
import useAuthStore from '../../../stores/useAuthStore';
import useGetRatedMovies from '../../../hooks/useGetRatedMovies';

const RatedMoviesScreen = ({navigation}) => {
  const userID = useAuthStore((state) => state.user.user_id)
  const sessionID = useAuthStore((state) => state.user.session_id)
  const {movies, loading} = useGetRatedMovies({userID, sessionID})

  const renderMovieItem = ({ item }) => (
    <MovieItem movie={item} onPress={() => navigation.navigate('RatedMovieDetails', { movie: item })}/>
  );

  return (
    <RatedMoviesContainer>
      <ScreenHeader onLeftPress={() => navigation.goBack()}/>
      <RatedMoviesHeaderContainer>
        <RatedMoviesHeader>My Rated Movies</RatedMoviesHeader>
      </RatedMoviesHeaderContainer>
      <RatedMoviesSection>
        {loading ? (
          <ActivityIndicator size="large" color="#58F5D9" />
          ) : (
          <FlatList
            data={movies}
            renderItem={renderMovieItem}
            keyExtractor={item => item.id.toString()}
            numColumns={3}
          />
        )}
      </RatedMoviesSection>
    </RatedMoviesContainer>
  )
}

export default RatedMoviesScreen