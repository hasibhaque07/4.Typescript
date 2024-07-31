import React, { useState } from 'react'

const TypingFormEvent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value);
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value);
    }
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const data = {name, email};
        console.log(data);
    }
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='name'/>Name:
                <input type='text' id='name' value={name} onChange={handleNameChange}/>
                <label htmlFor='email'/>Email:
                <input type='text' id='email' value={email} onChange={handleEmailChange}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default TypingFormEvent
