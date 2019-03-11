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
            <>
               <h1>To-Do App</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" placeholder="Add Todo..." value={this.state.todo} onChange={this.handleOnChange}></input>
                    <button type="submit">Add Todo</button>
                </form>
            </>
        )
    }
}

export default AddTodo;