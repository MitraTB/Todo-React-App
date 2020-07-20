import React, { useState } from 'react';
import {StyledButton, StyledInput} from './style';


export default function TodoForm(props){

    const {onSubmit} = props;
    const [todo , setTodo] = useState('');
    
    const onchangeHandler = e =>{
        if (e.target.value.trim !==''){
        setTodo(e.target.value);
    }
    }

    const onclickHandler = e =>{
        e.preventDefault();
        onSubmit(todo);
    }

return (
    <div>
    <StyledInput type="text" value={todo} onChange={onchangeHandler} placeholder="Enter a Task"></StyledInput>
    <StyledButton onClick={onclickHandler}>Submit</StyledButton>
    </div>
)    
}