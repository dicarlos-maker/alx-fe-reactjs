import { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const validate = () => {
        const newErrors = [];
        if (!username) newErrors.push('Username is required');
        if (!email) newErrors.push('Email is required');
        if (!password) newErrors.push('Password is required');
        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
        if (errors.length === 0) {
            console.log('Uploaded successfully');
            setEmail('');
            setPassword('');
            setUsername('');
        } else {
            console.log('An error occurred.');
        }
    };

    return (
        <>
            {errors.length > 0 && (
                <ul>
                    {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default RegistrationForm;
