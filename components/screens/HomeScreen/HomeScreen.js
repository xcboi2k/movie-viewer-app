import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { SearchContainer, SearchBar, TrendingMoviesContainer, TrendingMoviesHeaderContainer, TrendingMoviesHeader, HomeContainer} from './styles';
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
                leftIcon={<Ionicons name="chevron-back" size={30} color="#58F5D9" />}
                rightIcon={<MaterialIcons name="watch-later" size={30} color="#58F5D9" />}
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