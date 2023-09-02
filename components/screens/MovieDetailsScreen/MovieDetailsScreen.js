import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { DetailsLabel, MovieDetailsContainer, MovieTitle, PosterImage, Ratings, ReviewListContainer, ReviewTitle, Summary } from './styles';

import PosterPlaceHolder from '../../../assets/images/item-pic-placeholder.png'
import ReviewItem from '../../shared/ReviewItem/ReviewItem';
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader';

const MovieDetailsScreen = ({ route }) => {
    const { movie } = route.params;
    console.log(movie.id)
    // const dummyMovie = {
    //     title: 'Star Wars',
    //     summary: 'Lorem ipsum',
    //     year: '1999',
    //     duration: '1hr 30mins',
    //     ratings: '8/10'
    // }

    const dummyReviews = [
        {
        id: 1,
        author: 'John Doe',
        text: 'Good.',
        rating: 8
        },
        {
            id: 2,
            author: 'Janet Smith',
            text: 'Not so good.',
            rating: 5
        },
        {
            id: 3,
            author: 'Gina Colmert',
            text: 'Amazing.',
            rating: 9
        },
    ]

    return (
        <MovieDetailsContainer>
            <ScreenHeader 
                leftIcon={<Ionicons name="chevron-back" size={30} color="#58F5D9" />}
                rightIcon={<MaterialIcons name="watch-later" size={30} color="#58F5D9" />}
            />
            <ScrollView>
                <PosterImage source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}} />
                <View style={{ padding: 20 }}>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <Summary>{movie.overview}</Summary>
                    <Text>
                        <DetailsLabel>Year Released:</DetailsLabel> {movie.year}
                    </Text>
                    <Ratings>
                        <DetailsLabel>Ratings:</DetailsLabel> {movie.vote_average}
                    </Ratings>
                </View>
            </ScrollView>
            <ReviewTitle>Reviews:</ReviewTitle>
            <ReviewListContainer>
                <FlatList
                    data={dummyReviews}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ReviewItem
                            author={item.author}
                            text={item.text}
                            rating={item.rating}
                        />
                    )}
                />
            </ReviewListContainer>
            
        </MovieDetailsContainer>
    )
}

export default MovieDetailsScreen