import React from 'react'
import { MovieButton, MovieTitle, PosterImage } from './styles';

const MovieItem = ({ movie, onPress }) => {
    return (
        <MovieButton onPress={onPress}>
            <MovieTitle>{movie.title}</MovieTitle>
            {/* <PosterImage source={{ uri: movie.poster }}/> */}
        </MovieButton>
    )
}

export default MovieItem