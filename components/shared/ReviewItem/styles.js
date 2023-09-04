import styled from 'styled-components/native';

export const ReviewContainer = styled.View`
    width: 300px;
    border-radius: 8px;
    background-color: #2E3743;
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
    color: #58F5D9;
`;

export const ReviewRatingContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ReviewRating = styled.Text`
    font-size: 13px;
    color: white;
    margin-left: 5px;
`;

export const ReviewText = styled.Text`
    margin-top: 10px;
    font-size: 13px;
    color: white;
`;