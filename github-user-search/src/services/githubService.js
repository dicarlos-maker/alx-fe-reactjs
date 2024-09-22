import axios from 'axios';

const githubApiKey = import.meta.env.VITE_GITHUB_API_KEY;

const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${githubApiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
  }
};

export default fetchGitHubUser;
