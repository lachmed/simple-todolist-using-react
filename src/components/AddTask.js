import React, { useState } from "react";
import "../styles/AddTask.css";


const AddTask = (props) =>
{
        const [task,setTask]= useState('');
        return (

                <div className="addtask">

                    <h1>Add a task to your TodoList</h1>
                    <input type="text" placeholder="Your task here" onChange={event => setTask(event.target.value)}/>
                    <button className="btn" onClick={event => props.addtask(task)}>ADD</button>

                </div>
        )


}

export default AddTask;