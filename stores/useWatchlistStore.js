import { create } from 'zustand';
import { Alert} from 'react-native';

const apikey="5e2f93d8110c63359f4b34177a78e7e7"

const watchlistStore = (set, get) => ({
    watchlist: [],
    setWatchlist: (data) => set({ watchlist: data }),
    addWatchlist: async(watchListCredentials) => {
        console.log('addWatchlist state:',watchListCredentials)
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
            const response = await fetch(`https://api.themoviedb.org/3/account/${watchListCredentials.userID}/watchlist?api_key=${apikey}&session_id=${watchListCredentials.sessionID}`, options)
            const res = await response.json();
            console.log(res);
            if (res.success) {
                Alert.alert('SUCCESSFUL', 'Movie added/removed from watchlist successfully.')
            } else {
                Alert.alert('FAILED', 'Failed to update watchlist.')
            }
        } catch (error) {
            console.log('Error adding to watchlist:', error);
        }
    },
})

const useWatchlistStore = create(watchlistStore);

export default useWatchlistStore;