import { create } from 'zustand';

const authStore = (set) => ({
    user: {
        username: "",
        user_id: "",
    },
    setUser: (data) => set({ user: data }),
    loginUser: async(currentUser) => {
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
                request_token: '1531f1a558c8357ce8990cf887ff196e8f5402ec'
            })
            };
        fetch('https://api.themoviedb.org/3/authentication/token/validate_with_login', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    },
})

const useAuthStore = create(authStore);

export default useAuthStore;