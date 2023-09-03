import { useState, useEffect } from 'react';

export default function useValidateLogin({username, password, token}) {
    const [success, setSuccess] = useState('')
    useEffect(() => {
        async function validateUser() {
            try {
                const options = {
                    method: 'POST',
                    headers: {
                        accept: 'application/json',
                        'content-type': 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJmOTNkODExMGM2MzM1OWY0YjM0MTc3YTc4ZTdlNyIsInN1YiI6IjY0ZjFkYTU5ZGJiYjQyMDExYjcxNDE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2flLbwPagHEBs2jaRnvKcNyAOzEXvB1LNA_7OD4pqT8'
                    },
                    body: JSON.stringify({
                        username: currentUser.username,
                        password: currentUser.password,
                        request_token: currentUser.token
                    })
                };
                const response = await fetch('https://api.themoviedb.org/3/authentication/token/validate_with_login', options)
                const res = await response.json();
                setSuccess(res)
            } catch (error) {
            console.error('validateUserError:', error);
            }
        }
    
        validateUser();
    }, []);
    
    return success;
}
