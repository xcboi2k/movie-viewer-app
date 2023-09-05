import { useState, useEffect } from 'react';

const apiKey = '5e2f93d8110c63359f4b34177a78e7e7'; // Replace with your TMDb API key
const apiUrl = 'https://api.themoviedb.org/3';

export default function useSearchMovie(searchQuery) {
    const [searchResults, setSearchResults] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);
    
    useEffect(() => {
        async function searchMovies() {
            if (!searchQuery) {
            setSearchResults([]);
            return;
            }
    
            setSearchLoading(true);
    
            try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
                }
            };
    
            const response = await fetch(
                `${apiUrl}/search/movie?api_key=${apiKey}&query=${searchQuery}`,
                options
            );
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            setSearchResults(data.results);
            setSearchLoading(false);
            } catch (error) {
            console.log('useMovieSearchError:', error);
            setSearchLoading(false);
            }
        }
    
        searchMovies();
    }, [searchQuery]);
    
    return { searchResults, searchLoading };
}