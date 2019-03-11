import React from 'react';
import TodoItem from './TodoItem.js';


const Wrapper = (props) => (
    <>
        { props.tasks.map((tasks) => <TodoItem key={tasks.id} todo={tasks} 
        />) }
    </>
);

export default Wrapper;