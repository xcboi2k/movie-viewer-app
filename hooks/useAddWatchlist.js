import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

export default function useAddWatchlist({userID, movieID}) {
    useEffect(() => {
        async function addWatchlist() {
            try {
                const options = {
                    method: 'POST',
                    headers: {
                        accept: 'application/json',
                        'content-type': 'application/json',
                        Authorization: `Bearer ${sessionID}`
                    },
                    body: JSON.stringify({
                        media_type: 'movie',
                        media_id: movieID,
                        watchlist: true, 
                    })
                };
                const response = await fetch(`https://api.themoviedb.org/3/account/${userID}/watchlist`, options)
                const res = await response.json();
                if (res.success) {
                    Alert.alert('SUCCESSFUL', 'Movie added/removed from watchlist successfully.')
                } else {
                    Alert.alert('FAILED', 'Failed to update watchlist.')
                }
            } catch (error) {
                console.error('Error adding to watchlist:', error);
            }
        }
    
        addWatchlist();
    }, []);
}
