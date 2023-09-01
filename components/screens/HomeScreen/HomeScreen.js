import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { SearchContainer, SearchBar, TrendingMoviesContainer, TrendingMoviesHeaderContainer, TrendingMoviesHeader, HomeContainer} from './styles';
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
        { id: '10', title: 'Movie 10' },
        { id: '11', title: 'Movie 11' },
        { id: '12', title: 'Movie 12' },
        { id: '13', title: 'Movie 13' },
        { id: '14', title: 'Movie 14' },
        { id: '15', title: 'Movie 15' },
    ];

    const limitedData = dummyTrendingMovies.slice(0, 15);

    useEffect(() => {
        // Fetch trending movies data from your API or source
        setTrendingMovies(limitedData);
    }, []);

    const renderMovieItem = ({ item }) => (
        <MovieItem movie={item} onPress={() => handleMoviePress(item)}/>
    );

    return (
        <HomeContainer>
            <ScreenHeader 
                leftIcon={<Ionicons name="chevron-back" size={30} color="#58F5D9" />}
                rightIcon={<MaterialIcons name="watch-later" size={30} color="#58F5D9" />}
            />
            <SearchContainer>
                <FontAwesome name="search" size={24} color="#58F5D9" />
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
                    numColumns={3} // Display in 3 columns
                />
            </TrendingMoviesContainer>
        </HomeContainer>
    )
}

export default HomeScreen