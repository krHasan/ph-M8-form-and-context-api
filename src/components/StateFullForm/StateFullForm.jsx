import { useState } from "react";

const StateFullForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 3) {
            setError("password must be 3 character")
        } else {
            setError('');
        }
        console.log(name, email, password);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" id="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="email" />
                <br />                
                <input onChange={handlePasswordChange} type="password" name="password" id="password" />
                {
                    error && <p>{error}</p>
                }
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default StateFullForm;