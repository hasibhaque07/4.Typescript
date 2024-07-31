import React from 'react'
type userProps = {
    name: string;
    age: number;
    isRegistered: boolean;
    lang: string[];
}
const User = ({name, age, isRegistered, lang}: userProps) => {
  return (
    <div>
        <h3>User</h3>
        <p>{name}</p>
        <p>{age}</p>
        {isRegistered ? <p>Registed</p>: <p>Not registered</p>}
        <p>
            Language Speaks: 
            {lang.map((language) =>{
                return <span> {language} </span>
            })}
        </p>
    </div>
  )
}

export default User
