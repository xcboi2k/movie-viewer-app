import { create } from 'zustand';
import { Alert} from 'react-native';

const apikey="5e2f93d8110c63359f4b34177a78e7e7"

const ratingStore = (set, get) => ({
    addRating: async(ratingCredentials) => {
        try {
            const options = {
                method: 'POST',
                headers: {accept: 'application/json', 'Content-Type': 'application/json;charset=utf-8'},
                Authorization: `Bearer ${ratingCredentials.sessionID}`,
                body: `{"value":${ratingCredentials.ratingValue}}`
            };
                const response = await fetch(`https://api.themoviedb.org/3/movie/${ratingCredentials.movieID}/rating?api_key=${apikey}&session_id=${ratingCredentials.sessionID}`, options)
                const res = await response.json();
                if (res.success) {
                    Alert.alert('SUCCESSFUL', 'Rating added.')
                } else {
                    Alert.alert('FAILED', 'Failed to add rating.')
                }
        } catch (error) {
                console.log('Error adding to watchlist:', error);
        }
    },
    deleteRating: async(deleteRatingCredentials) => {
        try {
            const options = {
                method: 'DELETE',
                headers: {accept: 'application/json', 'Content-Type': 'application/json;charset=utf-8'},
                Authorization: `Bearer ${deleteRatingCredentials.sessionID}`,
            };
                const response = await fetch(`https://api.themoviedb.org/3/movie/${deleteRatingCredentials.movieID}/rating?api_key=${apikey}&session_id=${deleteRatingCredentials.sessionID}`, options)
                const res = await response.json();
                if (res.success) {
                    Alert.alert('SUCCESSFUL', 'Rating deleted.')
                } else {
                    Alert.alert('FAILED', 'Failed to delete rating.')
                }
        } catch (error) {
                console.log('Error deleting rating:', error);
        }
    },
})

const useRatingStore = create(ratingStore);

export default useRatingStore;