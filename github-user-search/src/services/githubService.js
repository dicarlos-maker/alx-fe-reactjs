import axios from 'axios';


const githubApiKey = import.meta.env.VITE_GITHUB_API_KEY;

const fetchUserData = async (username, location, minRepos) => {
  const query = [];
  
  if (username) query.push(`"${username}"`);
  if (location) query.push(`location:"${location}"`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const queryString = query.join(' '); 

  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${queryString}`, {
      headers: {
        Authorization: `token ${githubApiKey}`,
      },
    });
    return response.data.items; 
  } catch (error) {
    throw error; 
  }
};

export default fetchUserData;
