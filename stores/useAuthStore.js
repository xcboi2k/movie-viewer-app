import { create } from 'zustand';

const authStore = (set, get) => ({
    user: null, // User object (null if not logged in)
    isAuthenticated: false, // Authentication status,
    isLoginSuccess: false,
    // validatedRequestToken: null,
    // isSessionIDGenerated: false,
    // sessionID: null,
    setUser: (data) => set({ user: data }),
    loginUser: async(loginCredentials) => {
        console.log('loginUser state: ',loginCredentials)
        try{
            const validateLoginOptions = {
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
            const response = await fetch('https://api.themoviedb.org/3/authentication/token/validate_with_login', validateLoginOptions)
            const loginResponse = await response.json();
            // set({ validatedRequestToken: res.request_token, isLoginSuccess: true });

            if (loginResponse.success === true){
                try{
                    const generateSessionOptions = {
                        method: 'POST',
                        headers: {
                            accept: 'application/json',
                            'content-type': 'application/json',
                            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJmOTNkODExMGM2MzM1OWY0YjM0MTc3YTc4ZTdlNyIsInN1YiI6IjY0ZjFkYTU5ZGJiYjQyMDExYjcxNDE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2flLbwPagHEBs2jaRnvKcNyAOzEXvB1LNA_7OD4pqT8`
                        },
                        body: JSON.stringify({request_token: loginResponse.request_token})
                    };
                
                    const response = await fetch(`https://api.themoviedb.org/3/authentication/session/new`, generateSessionOptions);

                    const sessionResponse = await response.json();
                    // set({
                    //     isSessionIDGenerated: true,
                    //     sessionID: res.session_id
                    // });
                    // console.log('SESSION_ID:',res.session_id);

                    if(sessionResponse.success === true){
                        try{
                            const getDetailsOptions = {
                                method: 'GET',
                                headers: {
                                    accept: 'application/json',
                                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJmOTNkODExMGM2MzM1OWY0YjM0MTc3YTc4ZTdlNyIsInN1YiI6IjY0ZjFkYTU5ZGJiYjQyMDExYjcxNDE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2flLbwPagHEBs2jaRnvKcNyAOzEXvB1LNA_7OD4pqT8`
                                }
                            };
                    
                            const apiKey = '5e2f93d8110c63359f4b34177a78e7e7';

                            const response = await fetch(`https://api.themoviedb.org/3/account?api_key=${apiKey}&session_id=${sessionResponse.session_id}`, getDetailsOptions);

                            const userDetailsResponse = await response.json();

                            console.log('ACCOUNT_ID:',userDetailsResponse.id);
                            console.log('USERNAME:',userDetailsResponse.username);

                            const initialData = {
                                user_id: userDetailsResponse.id,
                                username: userDetailsResponse.username,
                                session_id: sessionResponse.session_id,
                            }

                            set({
                                user: initialData, isAuthenticated: true, isLoginSuccess: true
                            });

                        }catch(error){
                            console.error('Fetching User Details Error:', error);
                        }
                    }
                }catch(error){
                    console.error('Generate SessionID Error:', error);
                }
            }
        }catch(error){
            console.error('Login Error:', error);
        }
    },
})

const useAuthStore = create(authStore);

export default useAuthStore;