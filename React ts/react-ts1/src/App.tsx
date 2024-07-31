import React from 'react';


import User from './components/User';
import User1 from './components/User1';
import UsersArrayOfObj from './components/UsersArrayOfObj';
import DataFetch from './components/DataFetch';
import Button from './components/Button';
import Blogs from './components/BlogPost/Blogs';
import ButtonStyle from './components/styleProps/ButtonStyle';
import { getParsedCommandLineOfConfigFile } from 'typescript';
import UseStateHook from './components/typing useState Hook/UseStateHook';
import TypingEvent from './components/typingEvent/TypingEvent';
import TypingFormEvent from './components/typingEvent/TypingFormEvent';

const user1 = {
  name: 'Hasib haque', 
  age: 25, 
  isRegistered: false, 
  lang: ['bangla', 'english']
}

const usersArrayOfObj = [
  {
      id: 1,
      name: 'hasib',
      age: 25
  },
  {
      id: 2,
      name: 'haque',
      age: 24
  },
]

const buttonStyle = {
  color: 'red',
  backgroundColor: 'skyblue',
  padding: '20px'
}
function App() {
  return (
    <div>
      <h1>User management</h1>
      <User 
        name = 'Hasib haque' 
        age = {25} 
        isRegistered = {false} 
        lang = {['bangla', 'english']}
      />

      <User1 user = {user1}/>

      <UsersArrayOfObj users = {usersArrayOfObj}/>

      <DataFetch status = {'error'}/>   

      <Button>Click me</Button>
      <Blogs />
      {/* <ButtonStyle btnStyle={{color: 'red', backgroundColor: 'yellow', padding: '20px'}}/> */}
      <ButtonStyle btnStyle={buttonStyle}/>
      <UseStateHook />
      <TypingEvent />
      <TypingFormEvent />
    </div>
  );
}

export default App;
