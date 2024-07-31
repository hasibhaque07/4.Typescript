import React from 'react'
import Todo from './Todo';
import { TodoType, TodosProps } from '../types';

// type TodosType = {
//     todos: {
//         id: string;
//         title: string;
//     }[]
// }

// type TodosProps = {
//     todos: TodoType[];
//     handleDeleteTodo: Function;
// }
const Todos = (props: TodosProps) => {
    console.log(props.todos);
    return (
        <div className='todos'>
            {props.todos.map((todo) => <Todo todo = {todo} handleDeleteTodo = {props.handleDeleteTodo}/>)}
        </div>
    )
}

export default Todos
