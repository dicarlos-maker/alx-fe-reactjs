import { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (! username){
            alert('username required');
        }
        if (! email){
            alert('email required');
        }
        if (! password){
            alert('please enter password');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                required
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
            />
            <input
                required
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />

            <input
            required
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;