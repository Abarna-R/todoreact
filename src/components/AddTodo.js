import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleOnChange(e) {
        this.setState({
            todo: e.target.value
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.handleAddTodo(this.state.todo);
        this.setState({
            todo: ''
        });
    }

    render() {
        return (
            
            <div class="jumbotron">
               <h1 class="text-center">To-Do App</h1>
                <form class="text-center" onSubmit={this.handleFormSubmit}>
                    <input type="text" placeholder="Add Todo..." value={this.state.todo} onChange={this.handleOnChange}></input>
                    <button type="submit">Add +</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;