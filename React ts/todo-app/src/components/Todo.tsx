import React from 'react'

import {TodoProps, TodoType} from '../types';

// type TodoType = {
//     todo: {
//       id: string;
//       title: string;
//     } 
// }

// type TodoProps = {
//   todo: TodoType; 
//   handleDeleteTodo: Function;
// }

const Todo = (props: TodoProps) => {
    const {id, title} = props.todo;

    const deleteTodo = (id: string) =>{
      props.handleDeleteTodo(id);
    } 
    return (
      <div className='todo'>
        <p>{id}</p>
        <p>{title}</p>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    )
}

export default Todo
