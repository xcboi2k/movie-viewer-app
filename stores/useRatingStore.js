import { create } from 'zustand';
import { Alert} from 'react-native';

const ratingStore = (set, get) => ({
    addRating: async(ratingCredentials) => {
        console.log('addRating state: ', ratingCredentials)
        try {
            const options = {
                method: 'POST',
                headers: {accept: 'application/json', 'Content-Type': 'application/json;charset=utf-8'},
                Authorization: `Bearer ${ratingCredentials.sessionID}`,
                body: `{"value":${ratingCredentials.ratingValue}}`
            };
                const response = await fetch(`https://api.themoviedb.org/3/movie/${ratingCredentials.movieID}/rating`, options)
                const res = await response.json();
                if (res.success) {
                    Alert.alert('SUCCESSFUL', 'Rating added.')
                } else {
                    Alert.alert('FAILED', 'Failed to add rating.')
                }
        } catch (error) {
                console.error('Error adding to watchlist:', error);
        }
    },
    deleteRating: async(deleteRatingCredentials) => {
        console.log('addRating state: ', deleteRatingCredentials)
        try {
            const options = {
                method: 'DELETE',
                headers: {accept: 'application/json', 'Content-Type': 'application/json;charset=utf-8'},
                Authorization: `Bearer ${deleteRatingCredentials.sessionID}`,
            };
                const response = await fetch(`https://api.themoviedb.org/3/movie/${deleteRatingCredentials.movieID}/rating`, options)
                const res = await response.json();
                if (res.success) {
                    Alert.alert('SUCCESSFUL', 'Rating deleted.')
                } else {
                    Alert.alert('FAILED', 'Failed to delete rating.')
                }
        } catch (error) {
                console.error('Error deleting rating:', error);
        }
    },
})

const useRatingStore = create(ratingStore);

export default useRatingStore;