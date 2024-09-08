import { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(null)

    const handleUsername = (e) => {
        const { value } = e.target;
        setUsername(username);
    };

    const handleEmail = (e) => {
        const { value } = e.target;
        setEmail(email);
    };

    const handlePassword = (e) => {
        const { value } = e.target;
        setPassword(password);
    };

    const validateUsername = () => {
        if (!username) {
            setError('username is required')
        }
    }

    const validateEmail = () => {
        if (!email) {
            setError('email is required')
        }
    }

    const validatePassword = () => {
        if (!password) {
            setError('username is required')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                required
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                onBlur={validateUsername}
            />
            <input
                required
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={validateEmail}
            />
            <input
                required
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={validatePassword}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;