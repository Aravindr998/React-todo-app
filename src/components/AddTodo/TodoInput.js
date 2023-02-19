import { useRef, useState } from 'react'
import AddButton from '../UI/AddButton'
import Card from '../UI/Card'
import './TodoInput.css'

const TodoInput = props => {
  const taskInputRef = useRef()
  const [isValid, setIsValid] = useState(true)
  const formSubmitHandler = (e) => {
    e.preventDefault()
    if(taskInputRef.current.value.trim() === ''){
      setIsValid(false)
      return
    }
    const newItem ={
      id: Math.random(),
      description: taskInputRef.current.value,
      dateCreated: new Date()
    }
    props.onAddTask(newItem)
    taskInputRef.current.value = ''
  }
  const validHandler = () => setIsValid(true)
  const inputClass = `todo-input ${!isValid ? 'invalid' : ''}`

  return (
    <div className='row'>
      <Card>
        <form className='todo-form' onSubmit={formSubmitHandler} >
          <label htmlFor='todo' className='todo-label' >Add Todo</label>
          <input type='text' id='todo' className={inputClass} ref={taskInputRef} onChange={validHandler} />
          <AddButton type='submit' >Add</AddButton>
        </form>
      </Card>
    </div>
  )
}

export default TodoInput