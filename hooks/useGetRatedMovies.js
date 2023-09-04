import { useState, useEffect } from 'react';

const apikey="5e2f93d8110c63359f4b34177a78e7e7"

export default function useGetRatedMovies({userID, sessionID}) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getRatedMovies() {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                      accept: 'application/json',
                      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJmOTNkODExMGM2MzM1OWY0YjM0MTc3YTc4ZTdlNyIsInN1YiI6IjY0ZjFkYTU5ZGJiYjQyMDExYjcxNDE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2flLbwPagHEBs2jaRnvKcNyAOzEXvB1LNA_7OD4pqT8'
                    }
                };

                const response = await fetch('https://api.themoviedb.org/3/account/20383465/rated/movies?language=en-US&page=1&sort_by=created_at.asc', options)
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
