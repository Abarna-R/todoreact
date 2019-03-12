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
        this.delete = this.delete.bind(this);
        
    }
    delete(ditem) {
       
        var tempArray = this.state.tasks;
        tempArray.splice(tempArray.indexOf(ditem),1),
        this.setState({tasks:tempArray})
    }

    handleAddTodo(todoItem) {
        const todo = {
            id: Math.random() * 42343244,
            value: todoItem,
            done: false
        };
        this.setState((currState) => ({
            tasks: currState.tasks.concat([todo])
        }));        
    }

    render() {
        return (
            <div class="container-fluid justify-content-center">
                <AddTodo handleAddTodo={this.handleAddTodo} />
                <Wrapper delete={this.delete} tasks={this.state.tasks} />
            </div>
        );
    }
}

    export default App;