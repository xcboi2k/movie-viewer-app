import styled from 'styled-components/native';

export const HomeContainer = styled.View`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    border: 1px solid #ccc;
    margin-bottom: 16px;
    border-radius: 5px;
    padding: 10px;    
`;

export const SearchBar = styled.TextInput`
    flex: 1;
    padding-left: 10px; /* Add padding to the left to create space for the icon */
    font-size: 16px;
    color: #333;
`;

export const TrendingMoviesHeader = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    align-self: flex-start;
`;

export const TrendingMoviesHeaderContainer = styled.View`
    margin-top: 5px;
    margin-bottom: 3px;
    width: 90%;
`;

export const TrendingMoviesContainer = styled.View`
    background-color: red;
    flex: 1;
    margin-top: 5px;
    margin-bottom: 5px;
    align-items: center;
    width: 90%;
    height: 200px;
`;