import React from 'react';
import {Heading, ULItem, ListItems, ListContainer} from './style';


export default function todoList (props){
   
    const {onDelete}=props;
    return(
        <ListContainer>
            <Heading>Todo List</Heading>
            <ULItem>
                {
                    props.todos.map((todo , id) => {
                        //const {text , status , id} = todo;
                        return <ListItems key={id}>{todo.text}  <button onClick={onDelete.bind(this, todo.id)}>Delete</button></ListItems>
                    })
                }
            </ULItem>
        </ListContainer>
    )
            }