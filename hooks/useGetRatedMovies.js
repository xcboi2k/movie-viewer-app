import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

export default function useGetRatedMovies({userID, movieID, sessionID}) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getRatedMovies() {
            try {
                const options = {
                    method: 'POST',
                    headers: {
                        accept: 'application/json',
                        'content-type': 'application/json',
                        Authorization: `Bearer ${sessionID}`
                    },
                };
                const response = await fetch(`https://api.themoviedb.org/3/account/${userID}/rated/movies?language=en-US&page=1&sort_by=created_at.asc`, options)
                const data = await response.json();
                setMovies(data.results);
                setLoading(false);
            } catch (error) {
                console.error('getRatedMovies', error);
                setLoading(false);
            }
        }
    
        getRatedMovies();
    }, []);

    return { movies, loading };
}
