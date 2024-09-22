import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    setError('');

    try {
      const userData = await fetchUserData(username, location, minRepos);

      if (!userData || userData.length === 0) {
        setError("Looks like we cant find any users.");
        setUsers([]);
      } else {
        setUsers(userData);
      }
    } catch (err) {
      setError("Looks like we cant find any users.");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex flex-col p-4 space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border rounded p-2"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location (optional)"
          className="border rounded p-2"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories (optional)"
          className="border rounded p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {users.length > 0 && (
        <div className="mt-4">
          {users.map((user) => (
            <div key={user.id} className="border p-4 rounded mb-4">
              <h2 className="text-xl">{user.login}</h2>
              <p>Location: {user.location || 'N/A'}</p>
              <p>Public Repositories: {user.public_repos}</p>
              <p>Profile URL: <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></p>
              {user.avatar_url && <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
