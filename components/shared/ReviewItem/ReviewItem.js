import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ReviewContainer, ReviewInfoContainer, ReviewName, ReviewRating, ReviewRatingContainer, ReviewText } from './styles';

const ReviewItem = ({ author, text, rating }) => {
  return (
    <ReviewContainer>
      <ReviewInfoContainer>
        <ReviewName>{author}</ReviewName>
          <ReviewRatingContainer>
            <Ionicons name="md-star" size={13} color="#153A56" />
            <ReviewRating>{rating}/5</ReviewRating>
          </ReviewRatingContainer>
        </ReviewInfoContainer>
      <ReviewText>{text}</ReviewText>
    </ReviewContainer>
  )
}

export default ReviewItem