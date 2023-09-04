import { useState, useEffect } from 'react';

const apikey="5e2f93d8110c63359f4b34177a78e7e7"

export default function useGetWatchlist({userID, sessionID}) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWatchlistMovies() {
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
                const response = await fetch(`https://api.themoviedb.org/3/account/${userID}/watchlist/movies?api_key=${apikey}&session_id=${sessionID}`, options);

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
