import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { WatchlistContainer, WatchlistHeader, WatchlistHeaderContainer, WatchlistSection } from './styles';

import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader';
import MovieItem from '../../shared/MovieItem/MovieItem';
import useGetWatchlist from '../../../hooks/useGetWatchlist';
import useAuthStore from '../../../stores/useAuthStore';

const WatchlistScreen = ({navigation}) => {
    const userID = useAuthStore((state) => state.user.user_id)
    const sessionID = useAuthStore((state) => state.user.session_id)
    const {movies, loading} = useGetWatchlist({userID, sessionID})

    const renderMovieItem = ({ item }) => (
        <MovieItem movie={item} onPress={() => handleMoviePress(item)}/>
    );

    return (
        <WatchlistContainer>
            <ScreenHeader onLeftPress={() => navigation.goBack()}/>
            <WatchlistHeaderContainer>
                <WatchlistHeader>My Watchlist</WatchlistHeader>
            </WatchlistHeaderContainer>
            <WatchlistSection>
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
            </WatchlistSection>
        </WatchlistContainer>
    )
}

export default WatchlistScreen