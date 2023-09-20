import { json } from "react-router-dom";

 const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzNhMzRhNDJiZmYzNmZmYjM5N2U0ZmQ2ZDMyYjZmMyIsInN1YiI6IjY1MDIyZTRlZDdkY2QyMDEzOWNiOWY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YVZ3uDpLj_4Us1i5Z3zeK5l-ckB2iNGfLNXhOq7jjCQ`
        }
    };

export const movieQuery = (id) => ({
  queryKey: ['movie', id],
  queryFn: async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
    
    if (!response.ok) {
        throw json(
            'Bad request', 
            { 
                status: 500, 
                statusText: 'Something went wrong!' 
            }
        );
    }
    const data = await response.json();
    return data;
  }
});