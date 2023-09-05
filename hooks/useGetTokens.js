import { useState, useEffect } from 'react';

export default function useGetTokens() {
    const [requestToken, setRequestToken] = useState('')

    useEffect(() => {
        async function getRequestToken() {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJmOTNkODExMGM2MzM1OWY0YjM0MTc3YTc4ZTdlNyIsInN1YiI6IjY0ZjFkYTU5ZGJiYjQyMDExYjcxNDE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2flLbwPagHEBs2jaRnvKcNyAOzEXvB1LNA_7OD4pqT8`
                    }
                };
        
                const response = await fetch(
                    `https://api.themoviedb.org/3/authentication/token/new`,
                    options
                );
        
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
        
                const res = await response.json();
                console.log('REQUEST_TOKEN:', res.request_token);
                setRequestToken(res.request_token);
        
            } catch (error) {
                    console.log('getRequestTokenError:', error);
            }
        }

        getRequestToken();
    }, []);
    
    return requestToken;
}
