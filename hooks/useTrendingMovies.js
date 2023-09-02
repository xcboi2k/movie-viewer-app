import { useState, useEffect } from 'react';

const apiKey = '5e2f93d8110c63359f4b34177a78e7e7'; // Replace with your TMDb API key
const apiUrl = 'https://api.themoviedb.org/3';

export default function useTrendingMovies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTrendingMovies() {
            try {
                const options = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`, // Replace with your access token
                },
                };
                const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}`, options);

                if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setMovies(data.results);
                setLoading(false);
            } catch (error) {
                console.error('getTrendingMoviesError:', error);
                setLoading(false);
            }
            }

            fetchTrendingMovies();
        }, []);

    return { movies, loading };
}