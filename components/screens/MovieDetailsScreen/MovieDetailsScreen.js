import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ActivityContainer, ButtonContainer, DetailsLabel, MovieContainer, MovieDetailsContainer, MovieInfoContainer, MovieTitle, MovieTitleContainer, PosterImage, Ratings, RatingsContainer, RatingsDetailsContainer, ReviewListContainer, ReviewTitle, Summary, SummaryContainer, SummaryTitle } from './styles';

import PosterPlaceHolder from '../../../assets/images/item-pic-placeholder.png'
import ReviewItem from '../../shared/ReviewItem/ReviewItem';
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader';
import ButtonText from '../../shared/ButtonText/ButtonText';
import useAuthStore from '../../../stores/useAuthStore';
import useAddWatchlist from '../../../hooks/useAddWatchlist';
import useAddRating from '../../../hooks/useAddRating';
import useGetReviews from '../../../hooks/useGetReviews';

const MovieDetailsScreen = ({ route }) => {
    const { movie } = route.params;
    const userID = useAuthStore((state) => state.user.user_id)
    console.log(movie.id)
    console.log(userID)

    const {reviews, loading} = useGetReviews(movie.id)

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

    const addToWatchlist = () => {
        useAddWatchlist({
            userID: userID,
            movieID: movie.id
        })
    }

    const addRating = () => {
        useAddRating({
            userID: userID,
            ratingValue: value,
        })
    }

    return (
        <MovieDetailsContainer>
            <ScreenHeader 
                leftIcon={<Ionicons name="chevron-back" size={30} color="#58F5D9" />}
                rightIcon={<MaterialIcons name="watch-later" size={30} color="#58F5D9" />}
            />
            <MovieContainer>
                <PosterImage source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}} />
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
                                <ButtonText text='Add to Watchlist' buttonColor='#58F5D9' textColor='#15191E' width='100%' textSize='16'
                                onPress={addToWatchlist}
                                />
                            </ButtonContainer>
                            <ButtonContainer>
                                <ButtonText text='Add Rating' buttonColor='#58F5D9' textColor='#15191E' width='100%' textSize='16'/>
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
        </MovieDetailsContainer>
    )
}

export default MovieDetailsScreen