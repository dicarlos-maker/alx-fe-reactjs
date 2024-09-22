import axios from 'axios';

const githubApiKey = import.meta.env.VITE_GITHUB_API_KEY;


const fetchUserData = async (username) => {
  try {
    console.log(`Fetching user: ${username}`); 

   
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${githubApiKey}`,
      },
    });

    console.log(response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error.response); 
    throw error; 
  }
};

export default fetchUserData; 

