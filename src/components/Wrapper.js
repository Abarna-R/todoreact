import React from 'react';
import TodoItem from './TodoItem.js';

const Wrapper = (props) => (
    <div class="container-fluid bg-dark">
        { props.tasks.map((item) => <TodoItem delete={props.delete.bind(this)} key={item.id} todo={item}
         />) }
    </div>
);


export default Wrapper;