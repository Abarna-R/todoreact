import React from 'react';
import Wrapper from './Wrapper.js';
import AddTodo from './AddTodo';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            tasks:[]
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);

    }
   
    markTodoDone(id) {
        var todo = tasks[id];
        tasks.splice(id, 1);
        todo.done = !todo.done;
        todo.done ? tasks.push(todo) : tasks.unshift(todo);
        this.setState({tasks: tasks});  
      }


    handleAddTodo(todoItem) {
        const todo = {
            id: Math.random() * 3408767,
            value: todoItem,
            isComplete: false,
        };
        this.setState((currState) => ({
            tasks: currState.tasks.concat([todo])
        }));        
    }

    render() {
        console.log(this.state);
        return (
            <div >
                <AddTodo handleAddTodo={this.handleAddTodo} />
                <Wrapper tasks={this.state.tasks}
                 />
            </div>
        );
    }
}

    export default App;