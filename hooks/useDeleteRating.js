import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

export default function useDeleteRating({movieID, sessionID}) {
  useEffect(() => {
    async function deleteRating() {
        try {
          const options = {
            method: 'DELETE',
            headers: {accept: 'application/json', 'Content-Type': 'application/json;charset=utf-8'},
            Authorization: `Bearer ${sessionID}`,
          };
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/rating`, options)
            const res = await response.json();
            if (res.success) {
                Alert.alert('SUCCESSFUL', 'Rating deleted.')
            } else {
                Alert.alert('FAILED', 'Failed to delete rating.')
            }
        } catch (error) {
            console.error('Error deleting rating:', error);
        }
    }

    deleteRating();
}, []);
}
