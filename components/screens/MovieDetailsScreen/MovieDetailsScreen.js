import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, FlatList } from 'react-native';

import { DetailsLabel, MovieDetailsContainer, MovieTitle, PosterImage, Ratings, ReviewListContainer, ReviewTitle, Summary } from './styles';

import PosterPlaceHolder from '../../../assets/images/item-pic-placeholder.png'
import ReviewItem from '../../shared/ReviewItem/ReviewItem';

const MovieDetailsScreen = ({ route }) => {
    // const { movie } = route.params;

    const dummyMovie = {
        title: 'Star Wars',
        summary: 'Lorem ipsum',
        year: '1999',
        duration: '1hr 30mins',
        ratings: '8/10'
    }

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
            <ScrollView>
                <PosterImage source={PosterPlaceHolder} />
                <View style={{ padding: 20 }}>
                    <MovieTitle>{dummyMovie.title}</MovieTitle>
                    <Summary>{dummyMovie.summary}</Summary>
                    <Text>
                        <DetailsLabel>Year Released:</DetailsLabel> {dummyMovie.year}
                    </Text>
                    <Text>
                        <DetailsLabel>Duration:</DetailsLabel> {dummyMovie.duration}
                    </Text>
                    <Ratings>
                        <DetailsLabel>Ratings:</DetailsLabel> {dummyMovie.ratings}
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