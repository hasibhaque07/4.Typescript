import React, { useState } from 'react'

type User = {
    id: number;
    name: string;
}

const UseStateHook = () => {
    const [count, setCount] = useState<number | string>(0);

    const [user, setUser] = useState<null | User>(null); //to access value ?. is used for null value
    const [user2, setUser2] = useState<User>({} as User); //if we do not use the ?. operator to access value

    const handleBtnClick = () =>{
        setCount(count);
        setCount('hs');
    } 

    const handleAddUser = () =>{
        setUser({id:1, name: 'hasib'});
        setUser2({id:2, name: 'hasib2'});
        console.log(user);
    }
    return (
        <div>
            {<p>Count: {count}</p>}
            <button onClick={handleBtnClick}>Increment</button>
            
            
            <button onClick={handleAddUser}>Add user</button>

            <h1>{user?.name}</h1> 
            {/* const [user, setUser] = useState<null | User>(null);  '?. for null value'*/}
            <h1>{user2.name}</h1> 
            
        </div>
    )
}

export default UseStateHook
