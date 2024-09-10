import { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('username');
    const [email, setEmail] = useState('email');
    const [password, setPassword] = useState('password');
    const [errors, setErrors] = useState('')

 
    const validate = () =>{
        if(!username){
            setErrors('username is required')
        }
        if(!password){
            setErrors('password is required')
        }
        if(!email){
            setErrors('email is required')
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (errors.length === 0){
            console.log('uploaded successfully')
            setEmail('')
            setPassword('')
            setUsername('')
        }
        else{
            console.log('An error occured.')
        }
    };

    return (
        <>
        { errors? <p>{errors}</p>: <p></p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default RegistrationForm;