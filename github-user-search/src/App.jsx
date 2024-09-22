import React, { useState } from 'react';
import fetchGitHubUser from './services/githubService';

const App = () => {
  const [username, setUsername] = useState(''); 
  const [userData, setUserData] = useState(null); 
  const [error, setError] = useState(null); 

  const handleSearch = async () => {
    if (username.trim() === '') {
      setError('Please enter a valid GitHub username.');
      return;
    }

    try {
      const data = await fetchGitHubUser(username);
      if (data) {
        setUserData(data);
        setError(null); 
      } else {
        setError('User not found.');
      }
    } catch (err) {
      setError('Error fetching GitHub user data.');
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-semibold mb-4">GitHub User Search</h1>

      
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mb-4"
      />

     
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>

    
      {error && <p className="text-red-500 mt-4">{error}</p>}

      
      {userData && (
        <div className="mt-6 border p-4 rounded">
          <img
            src={userData.avatar_url}
            alt={userData.name}
            className="w-16 h-16 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold">{userData.name}</h2>
          <p className="text-gray-600">{userData.bio}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Profile on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
