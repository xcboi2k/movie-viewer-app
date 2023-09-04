import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SearchContainer, SearchBar, TrendingMoviesContainer, TrendingMoviesHeaderContainer, TrendingMoviesHeader, HomeContainer} from './styles';
import { ICON_NAMES } from '../../constants/constant';
import MovieItem from '../../shared/MovieItem/MovieItem';
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader';

import useTrendingMovies from '../../../hooks/useTrendingMovies';
import useSearchMovie from '../../../hooks/useSearchMovie';

const HomeScreen = () => {
    const navigation = useNavigation();

    const [searchText, setSearchText] = useState('');
    const {movies, loading} = useTrendingMovies();
    const {searchResults, searchLoading} = useSearchMovie(searchText);

    const renderMovieItem = ({ item }) => (
        <MovieItem movie={item} onPress={() => navigation.navigate('MovieDetails', { movie: item })}/>
    );

    return (
        <HomeContainer>
            <ScreenHeader 
                leftIcon={ICON_NAMES.WATCHLIST}
                rightIcon={ICON_NAMES.RATEDLIST}
                onLeftPress={() => navigation.navigate('Watchlist')}
                onRightPress={() => navigation.navigate('RatedMovies')}
            />
            <SearchContainer>
                <FontAwesome name="search" size={24} color="#58F5D9" />
                <SearchBar
                placeholder="Search for movies..."
                placeholderTextColor="#58F5D9"
                onChangeText={text => setSearchText(text)}
                value={searchText}
                />
            </SearchContainer>
            <TrendingMoviesHeaderContainer>
                {searchText ? 
                    <TrendingMoviesHeader>Results</TrendingMoviesHeader>
                :
                    <TrendingMoviesHeader>Popular</TrendingMoviesHeader>
                }
            </TrendingMoviesHeaderContainer>
            <TrendingMoviesContainer>
            {loading || searchLoading ? (
                <ActivityIndicator size="large" color="#58F5D9" />
            ) : (
                <FlatList
                data={searchText ? searchResults : movies}
                renderItem={renderMovieItem}
                keyExtractor={item => item.id.toString()}
                numColumns={3}
                />
            )}
            </TrendingMoviesContainer>
        </HomeContainer>
    )
}

export default HomeScreen