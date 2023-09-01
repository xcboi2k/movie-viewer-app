import React from 'react'
import { MovieButton, MovieTitle, PosterImage } from './styles';

import PosterPlaceHolder from '../../../assets/images/item-pic-placeholder.png'

const MovieItem = ({ movie, onPress }) => {
    return (
        <MovieButton onPress={onPress}>
            <PosterImage source={PosterPlaceHolder}/>
        </MovieButton>
    )
}

export default MovieItem