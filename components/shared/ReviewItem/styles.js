import styled from 'styled-components/native';

export const ReviewContainer = styled.View`
    width: 300px;
    border-radius: 8px;
    background-color: #F4F6F8;
    margin-bottom: 15px;
    padding: 16px;
`;

export const ReviewInfoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ReviewName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #153A56;
`;

export const ReviewRatingContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ReviewRating = styled.Text`
    font-size: 13px;
    color: gray;
    margin-left: 5px;
`;

export const ReviewText = styled.Text`
    font-size: 13px;
`;