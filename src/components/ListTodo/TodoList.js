import { useState } from 'react'
import Card from '../UI/Card'
import './TodoList.css'

const TodoList = props => {
  const todoCheckHandler = (event) => {
    props.onTaskComplete(event.target.value)
  }
  const deleteHandler = (event) => {
    props.onDeleteTask(event.target.id)
  }
  let todo = <p>Nothing to show</p>
  if(props.todoItems.length>0){
    todo = props.todoItems.map((item) => (
      <li className='list-items' key={item.id}>
        <input type='checkbox' value={item.id} onChange={todoCheckHandler}/>
        <p>
          {item.description}
        </p>
        <button className='delete-button' onClick={deleteHandler}>
          <img id={item.id} src='/images/delete.png' />
        </button>
      </li>
    ))
  }

  return(
    <div className='row'>
      <Card>
        <div>
          <p>Todo items</p>
        </div>
        <ul>
          {todo}
        </ul>
      </Card>
    </div>
  )
}

export default TodoList