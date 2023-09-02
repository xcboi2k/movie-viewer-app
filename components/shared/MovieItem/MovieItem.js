import React from 'react'
import { MovieButton, MovieTitle, PosterImage } from './styles';

import PosterPlaceHolder from '../../../assets/images/item-pic-placeholder.png'

const MovieItem = ({ movie, onPress }) => {
    
    return (
        <MovieButton onPress={onPress}>
            <PosterImage source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}/>
        </MovieButton>
    )
}

export default MovieItem