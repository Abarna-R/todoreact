import React from 'react';
class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
        this.Click = this.Click.bind(this);
    }
  Click(e){
      e.preventDefault();
      console.log(123);
  }
    render() {
    
        return (
            <div class="container-fluid bg-secondary">
              <div class="text-center">
                <p class="text-white">
                    <input type="checkbox" onChange={this.Click}></input>
                       {this.props.todo.value}
                    <button onClick={this.props.delete.bind(this,this.props.todo)}>X</button>
                </p>
                </div>
            </div>
        );
    }
}
    export default TodoItem ;