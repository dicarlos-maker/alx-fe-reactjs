// src/components/Search.jsx
import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent page refresh
    if (!username) {
      setError('Please enter a valid username.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const userData = await fetchUserData(username);
      
      if (!userData || userData.message === 'Not Found') {
        setError('Looks like we can\'t find the user.');
        setUser(null);
      } else {
        setUser(userData);
      }
    } catch (err) {
      setError('Looks like we can\'t find the user.');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border rounded p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="mt-4">
          <h2 className="text-xl">{user.name || 'No Name Available'}</h2>
          <p>Username: {user.login}</p>
          <p>Profile URL: <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></p>
          {user.avatar_url && <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />}
        </div>
      )}
    </div>
  );
};

export default Search;
