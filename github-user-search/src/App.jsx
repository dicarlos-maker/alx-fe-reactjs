import React, { useState } from 'react';
import fetchGitHubUser from './services/githubService';

const App = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!username) {
      setError('Please enter a valid username.');
      return;
    }

    const userData = await fetchGitHubUser(username);
    if (!userData) {
      setError('User not found.');
    } else {
      setError(null); 
      setUser(userData);
    }
  };

  return (
    <div className="container">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Username: {user.login}</p>
          <p>Profile URL: <a href={user.html_url}>{user.html_url}</a></p>
        </div>
      )}
    </div>
  );
};

export default App;
