import { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([])

 
    const validate = () =>{
        if(!username){
            setErrors(...errors.concat('username is required'))
        }
        if(!password){
            setErrors(...errors.concat('password is required'))
        }
        if(!email){
            setErrors(...errors.concat('email is required'))
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (errors.length === 0){
            console.log('uploaded successfully')
        }
        else{
            console.log('An error occured.')
        }
    };

    return (
        <>
        { errors? errors.map(e => <p>e</p>): <p></p>}
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e)=>{e.target.value}}
                />
                <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e)=>{e.target.value}}
                />
                <input
                    required
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e)=>{e.target.value}}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default RegistrationForm;