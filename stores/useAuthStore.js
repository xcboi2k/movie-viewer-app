import { create } from 'zustand';

const authStore = (set, get) => ({
    user: null, // User object (null if not logged in)
    isAuthenticated: false, // Authentication status,
    isLoginSuccess: false,
    validatedRequestToken: null,
    isSessionIDGenerated: false,
    sessionID: null,
    setUser: (data) => set({ user: data }),
    loginUser: async(loginCredentials) => {
        console.log('loginUser state: ',loginCredentials)
        try{
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJmOTNkODExMGM2MzM1OWY0YjM0MTc3YTc4ZTdlNyIsInN1YiI6IjY0ZjFkYTU5ZGJiYjQyMDExYjcxNDE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2flLbwPagHEBs2jaRnvKcNyAOzEXvB1LNA_7OD4pqT8'
                },
                body: JSON.stringify({
                    username: loginCredentials.username,
                    password: loginCredentials.password,
                    request_token: loginCredentials.token
                })
            };
            const response = await fetch('https://api.themoviedb.org/3/authentication/token/validate_with_login', options)
            const res = await response.json();
            set({ validatedRequestToken: res.request_token, isLoginSuccess: true });
        }
        catch(error){
            console.error('Login Error:', error);
        }
    },
    getSessionID: async(requestToken) => {
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJmOTNkODExMGM2MzM1OWY0YjM0MTc3YTc4ZTdlNyIsInN1YiI6IjY0ZjFkYTU5ZGJiYjQyMDExYjcxNDE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2flLbwPagHEBs2jaRnvKcNyAOzEXvB1LNA_7OD4pqT8`
            },
            body: JSON.stringify({request_token: requestToken})
        };
    
        const response = await fetch(
            `https://api.themoviedb.org/3/authentication/session/new`,
            options
        );
    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const res = await response.json();
        set({
            isSessionIDGenerated: true,
            sessionID: res.session_id
        });
        console.log('SESSION_ID:',res.session_id);
    },
    getUserCredentials: async(sessionID) => {
        console.log('user credentials', sessionID)
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJmOTNkODExMGM2MzM1OWY0YjM0MTc3YTc4ZTdlNyIsInN1YiI6IjY0ZjFkYTU5ZGJiYjQyMDExYjcxNDE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2flLbwPagHEBs2jaRnvKcNyAOzEXvB1LNA_7OD4pqT8`
            }
        };

        const apiKey = '5e2f93d8110c63359f4b34177a78e7e7';
        const response = await fetch(
            `https://api.themoviedb.org/3/account?api_key=${apiKey}&session_id=${sessionID}`,
            options
        );

        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const res = await response.json();
        console.log('ACCOUNT_ID:',res.id);
        console.log('USERNAME:',res.username);
        const initialData = {
            user_id: res.id,
            username: res.username,
            session_id: sessionID,
        }
        set({
            user: initialData, isAuthenticated: true
        });
    }
    
})

const useAuthStore = create(authStore);

export default useAuthStore;