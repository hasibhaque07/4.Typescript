import React from 'react'

type userProps = {
    user: {
        name: string;
        age: number;
        isRegistered: boolean;
        lang: string[];
    }   
}
const User1 = ({user}: userProps) => {
  return (
    <div>
        <h3>User1</h3>
        <p>{user.name}</p>
        <p>{user.age}</p>
        {user.isRegistered ? <p>Registed</p>: <p>Not registered</p>}
        <p>
            Language Speaks: 
            {user.lang.map((language) =>{
                return <span> {language} </span>
            })}
        </p>
    </div>
  )
}

export default User1
