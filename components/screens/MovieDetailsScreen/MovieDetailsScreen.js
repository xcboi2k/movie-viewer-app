import React, { useState, useEffect } from 'react';
import { Alert, FlatList, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { ActivityContainer, ButtonContainer, DetailsLabel, MovieContainer, MovieDetailsContainer, MovieInfoContainer, MovieTitle, MovieTitleContainer, PosterImage, Ratings, RatingsContainer, RatingsDetailsContainer, ReviewListContainer, ReviewTitle, Summary, SummaryContainer, SummaryTitle } from './styles';

import { ICON_NAMES } from '../../constants/constant';

import ReviewItem from '../../shared/ReviewItem/ReviewItem';
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader';
import ButtonText from '../../shared/ButtonText/ButtonText';
import RatingFormModal from '../../shared/RatingFormModal/RatingFormModal';

import useGetReviews from '../../../hooks/useGetReviews';

import useAuthStore from '../../../stores/useAuthStore';
import useWatchlistStore from '../../../stores/useWatchlistStore';
import useRatingStore from '../../../stores/useRatingStore';

const MovieDetailsScreen = ({ navigation, route }) => {
    const { movie } = route.params;
    const userID = useAuthStore((state) => state.user.user_id)
    const sessionID = useAuthStore((state) => state.user.session_id)
    const addWatchlist = useWatchlistStore((state) => state.addWatchlist)
    const addRating = useRatingStore((state) => state.addRating)
    const movieID =  movie.id

    console.log(movie.id)
    console.log(userID)

    const {reviews, loading} = useGetReviews(movie.id)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleAddWatchlist = () => {
        addWatchlist({
            userID: userID,
            sessionID: sessionID,
            movieID: movieID,
        })
    }

    const handleAddRating = (rating) => {
        addRating({
            sessionID: sessionID,
            movieID: movieID,
            ratingValue: rating,
        })
    }

    const handleOpenRatingModal = () => {
        setIsModalVisible(true);
    };

    return (
        <MovieDetailsContainer>
            <ScreenHeader 
                leftIcon={ICON_NAMES.BACK}
                onLeftPress={() => navigation.goBack()}
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
                                onPress={handleAddWatchlist}/>
                            </ButtonContainer>
                            <ButtonContainer>
                                <ButtonText text='Add Rating' buttonColor='#58F5D9' textColor='#15191E' width='100%' textSize='16'
                                onPress={handleOpenRatingModal}/>
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
            <RatingFormModal movieName={movie.title} isVisible={isModalVisible} 
            onClose={() => setIsModalVisible(false)} onSubmitRating={handleAddRating}/>
        </MovieDetailsContainer>
    )
}

export default MovieDetailsScreen