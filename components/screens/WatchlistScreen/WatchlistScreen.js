import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Container, WatchlistContainer, WatchlistHeader, WatchlistHeaderContainer, WatchlistSection } from './styles';

import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader';
import MovieItem from '../../shared/MovieItem/MovieItem';

const WatchlistScreen = () => {
    const [watchlistMovies, setWatchlistMovies] = useState([]);
    const dummyWatchlistMovies = [
        { id: '1', title: 'Movie 1' },
        { id: '2', title: 'Movie 2' },
        { id: '3', title: 'Movie 3' },
        { id: '4', title: 'Movie 4' },
        { id: '5', title: 'Movie 5' },
        { id: '6', title: 'Movie 6' },
        { id: '7', title: 'Movie 7' },
        { id: '8', title: 'Movie 8' },
        { id: '9', title: 'Movie 9' },
        // Add more movies here
    ];

    useEffect(() => {
        // Fetch trending movies data from your API or source
        setWatchlistMovies(dummyWatchlistMovies);
    }, []);

    const renderMovieItem = ({ item }) => (
        <MovieItem movie={item} onPress={() => handleMoviePress(item)}/>
    );

    return (
        <WatchlistContainer>
            <ScreenHeader/>
            <WatchlistHeaderContainer>
                <WatchlistHeader>My Watchlist</WatchlistHeader>
            </WatchlistHeaderContainer>
            <WatchlistSection>
                <FlatList
                data={watchlistMovies}
                renderItem={renderMovieItem}
                keyExtractor={item => item.id}
                />
            </WatchlistSection>
        </WatchlistContainer>
    )
}

export default WatchlistScreen