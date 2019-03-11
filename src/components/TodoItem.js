import React from 'react';
class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
        this.click = this.click.bind(this);
    }
  click(e){
      e.preventDefault()
       
       console.log(123);
  }

    render() {
        return (
            <>
                <p>
                    <input type="checkbox" onChange={this.click}></input>
                        {this.props.todo.value}
                    <button onChange="">X</button>
                </p>
            </>
        );
    }
}
    export default TodoItem ;