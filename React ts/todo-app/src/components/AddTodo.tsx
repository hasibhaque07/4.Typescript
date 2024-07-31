import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AddTodoProps } from '../types';

// type AddTodoProps = {
//     handleAddTodo: Function;
// };
const AddTodo = (props: AddTodoProps) => {
    const [title, setTitle] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.target.value);
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const newTodo = {id: new Date().getTime().toString(), title: title};
        props.handleAddTodo(newTodo);
        setTitle('');
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'/>Todo Title:
                <input type='text' value={title} onChange={handleChange}/>
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
