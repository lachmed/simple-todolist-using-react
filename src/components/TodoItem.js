import React from 'react';
import '../styles/TodoItem.css';


const TodoItem = (props) => {
    return (
        <div className="todoitem">
            <input type="checkbox" checked={props.item.completed} onChange={ (event) =>{props.taskDone(props.item.id)} } /> <span className={props.item.completed ? "Completed" : ""}>  {props.item.task}  </span>
        </div>
    );
}




export default TodoItem;