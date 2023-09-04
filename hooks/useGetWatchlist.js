import { useState, useEffect } from 'react';

export default function useGetWatchlist() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWatchlistMovies({userID, sessionID}) {
            console.log('SESSION', sessionID)
            console.log('USER', userID)
            try {
                const options = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${sessionID}`, // Replace with your access token
                },
                };
                const response = await fetch(`https://api.themoviedb.org/3/account/${userID}/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc`, options);

                if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setMovies(data.results);
                setLoading(false);
            } catch (error) {
                console.error('fetchWatchlistError:', error);
                setLoading(false);
            }
            }

            fetchWatchlistMovies();
        }, []);

    return { movies, loading };
}
