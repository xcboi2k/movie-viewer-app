import { create } from 'zustand';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '5e2f93d8110c63359f4b34177a78e7e7';

const watchlistStore = (set, get) => ({
    watchlist: [],
    reset: () => set({ watchlist: [] }),
    setWatchlist: (data) => set({ watchlist: data }),
    addToWatchlist: async(newMovie, userID) => {
        try{
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJmOTNkODExMGM2MzM1OWY0YjM0MTc3YTc4ZTdlNyIsInN1YiI6IjY0ZjFkYTU5ZGJiYjQyMDExYjcxNDE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2flLbwPagHEBs2jaRnvKcNyAOzEXvB1LNA_7OD4pqT8'
                },
                body: JSON.stringify({media_type: 'movie', media_id: 11, watchlist: true})
            };

            const res = await fetch(`${apiUrl}/account/${userID}/watchlist`, options)
        }
        catch(error){
            console.log("addWatchlistError:", err);
        }
    },
    getWatchList: async(userID) => {
        try{
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJmOTNkODExMGM2MzM1OWY0YjM0MTc3YTc4ZTdlNyIsInN1YiI6IjY0ZjFkYTU5ZGJiYjQyMDExYjcxNDE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2flLbwPagHEBs2jaRnvKcNyAOzEXvB1LNA_7OD4pqT8'
                }
            };

            const res = await fetch(`${apiUrl}/account/${userID}/watchlist/movies`, options)
            setWatchlist(res.data.results)
        }
        catch(error){
            console.log("getWatchlistError:", err);
        }
    }
})

const useWatchlistStore = create(watchlistStore);

export default useWatchlistStore;