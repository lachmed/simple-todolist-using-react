import React from 'react';

// Components
import TodoItem from "./TodoItem";
import AddTask from "./AddTask";

// Data and style

import TodoData from "../data/TodoData"
import '../styles/App.css';





class App extends React.Component {

        constructor()
        {
                super();

                this.state = {
                        todos: TodoData,
                        isLoggedin : false
                }
        this.taskDone = this.taskDone.bind(this);
        this.addtask = this.addtask.bind(this);
        }




        taskDone(id) { //BOchangeHandler


                this.setState(   //BOsetState


                        prevState => { //BOarrowfunction

                                const updatedState = prevState.todos.map( //BOmapmethod

                                                        elm => { //BOmappingfunction

                                                                if(elm.id === id)
                                                                {
                                                                        elm.completed= !elm.completed;
                                                                }
                                                                return elm;

                                                        } //EOmappingfunction
                                ); //EOmapmethod
                        
                                return {  //Returning the modified state
                                        todos: updatedState
                                }


                        }//EOarrowfunction

                // EOsetState
                        );

        
        // EOchangeHandler
        }
               
        addtask(task){
                        this.setState(prevState =>
                                {
                                        prevState.todos.push(
                                                {
                                                id : prevState.todos.length+1,
                                                task: task,
                                                completed: false
                                        }
                                        );


                                        return {
                                                todos : prevState.todos,
                                                isLoggedin: prevState.isLoggedin
                                                
                                        }


                                }

                        )
        }


        render()
        {
                var TodoItemList= this.state.todos.map(
                        ( item ) => {
                                return(
                                 <TodoItem key={item.id} item={item} taskDone={this.taskDone}  />
                                );
                        }

                );

                return(
                        <div>
                        <AddTask addtask={this.addtask}/>
                         {TodoItemList}      
                         </div>
                        
                 );
        }


}

export default App;