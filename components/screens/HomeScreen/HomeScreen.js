import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Container, SearchContainer, SearchBar, TrendingMoviesContainer, TrendingMoviesHeaderContainer, TrendingMoviesHeader, HomeContainer} from './styles';
import MovieItem from '../../shared/MovieItem/MovieItem';
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader';

const HomeScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [trendingMovies, setTrendingMovies] = useState([]);

    // Simulated trending movies data
    const dummyTrendingMovies = [
        { id: '1', title: 'Movie 1' },
        { id: '2', title: 'Movie 2' },
        { id: '3', title: 'Movie 3' },
        { id: '4', title: 'Movie 4' },
        { id: '5', title: 'Movie 5' },
        { id: '6', title: 'Movie 6' },
        { id: '7', title: 'Movie 7' },
        { id: '8', title: 'Movie 8' },
        { id: '9', title: 'Movie 9' },
    ];

    useEffect(() => {
        // Fetch trending movies data from your API or source
        setTrendingMovies(dummyTrendingMovies);
    }, []);

    const renderMovieItem = ({ item }) => (
        <MovieItem movie={item} onPress={() => handleMoviePress(item)}/>
    );

    return (
        <HomeContainer>
            <ScreenHeader />
            <SearchContainer>
                <FontAwesome name="search" size={24} color="black" />
                <SearchBar
                placeholder="Search for movies..."
                onChangeText={text => setSearchText(text)}
                value={searchText}
                />
            </SearchContainer>
            <TrendingMoviesHeaderContainer>
                <TrendingMoviesHeader>Trending Movies</TrendingMoviesHeader>
            </TrendingMoviesHeaderContainer>
            <TrendingMoviesContainer>
                <FlatList
                    data={trendingMovies}
                    renderItem={renderMovieItem}
                    keyExtractor={item => item.id}
                />
            </TrendingMoviesContainer>
        </HomeContainer>
    )
}

export default HomeScreen