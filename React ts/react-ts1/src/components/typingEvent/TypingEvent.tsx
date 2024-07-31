import React, { useState } from 'react'

const TypingEvent = () => {

    const [userName, setUsername] = useState('');
    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(userName);
    }
    
    return (
        <div>
            <h1>typing event</h1>
            <input type='text' value={userName} onChange={handleUserNameChange}/>
            <button onClick={handleBtnClick}>Submit</button>
            <p>{userName}</p>
        </div>
    )
}

export default TypingEvent
