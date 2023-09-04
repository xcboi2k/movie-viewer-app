import { create } from 'zustand';
import { Alert} from 'react-native';

const watchlistStore = (set, get) => ({
    addWatchlist: async(watchListCredentials) => {
        console.log('addWatchlist state: ',watchListCredentials)
        try {
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    Authorization: `Bearer ${watchListCredentials.sessionID}`
                },
                body: JSON.stringify({
                    media_type: 'movie',
                    media_id: watchListCredentials.movieID,
                    watchlist: true, 
                })
            };
            const response = await fetch(`https://api.themoviedb.org/3/account/${watchListCredentials.userID}/watchlist`, options)
            console.log(response)
            const res = await response.json();
            if (res.success) {
                Alert.alert('SUCCESSFUL', 'Movie added/removed from watchlist successfully.')
            } else {
                Alert.alert('FAILED', 'Failed to update watchlist.')
            }
        } catch (error) {
            console.error('Error adding to watchlist:', error);
        }
    },
})

const useWatchlistStore = create(watchlistStore);

export default useWatchlistStore;