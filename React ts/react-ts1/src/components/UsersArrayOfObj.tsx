import React from 'react'

type usersProps = {
    users: {
        id: number;
        name: string;
        age: number;
    }[]  
}

const UsersArrayOfObj = ({users} : usersProps) => {
    
    console.log(users);

    return (
        <div>
            <h1>users Array of obj</h1>
            {users.map((user) => {
                const {id, name, age} = user;
                return <div key = {id}>
                    <p>{name}</p>
                    <p>{age}</p>
                </div>
            })}
        </div>
    )
}

export default UsersArrayOfObj
