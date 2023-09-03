import { useState, useEffect } from 'react';

export default function useGetReviews(movieID) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
        try {
            const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`, // Replace with your access token
            },
            };
            const response = await fetch(`${apiUrl}/movie/${movieID}/reviews?language=en-US&page=1`, options);

            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setMovies(data.results);
            setLoading(false);
        } catch (error) {
            console.error('fetchReviewsError:', error);
            setLoading(false);
        }
        }

        fetchReviews();
    }, []);

  return { reviews, loading };
}
