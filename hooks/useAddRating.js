import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

export default function useAddRating({movieID, ratingValue, sessionID}) {
  useEffect(() => {
    async function addRating() {
        try {
          const options = {
            method: 'POST',
            headers: {accept: 'application/json', 'Content-Type': 'application/json;charset=utf-8'},
            Authorization: `Bearer ${sessionID}`,
            body: `{"value":${ratingValue}}`
          };
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/rating`, options)
            const res = await response.json();
            if (res.success) {
                Alert.alert('SUCCESSFUL', 'Rating added.')
            } else {
                Alert.alert('FAILED', 'Failed to add rating.')
            }
        } catch (error) {
            console.error('Error adding to watchlist:', error);
        }
    }

    addRating();
}, []);
}
