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
                accept: 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJmOTNkODExMGM2MzM1OWY0YjM0MTc3YTc4ZTdlNyIsInN1YiI6IjY0ZjFkYTU5ZGJiYjQyMDExYjcxNDE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2flLbwPagHEBs2jaRnvKcNyAOzEXvB1LNA_7OD4pqT8`, // Replace with your access token
            },
            };
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/reviews?language=en-US&page=1`, options);

            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Data', data)
            setReviews(data.results);
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
