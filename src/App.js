import { useEffect, useState } from 'react';
import TodoInput from './components/AddTodo/TodoInput'
import './App.css';
import TodoList from './components/ListTodo/TodoList';
import CompletedList from './components/ListCompleted/CompletedList';

const TODO_STORAGE_KEY = 'todoApp.todos'
const COMP_STORAGE_KEY = 'todoApp.completed'

function App() {
  let todoItems = JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || []
  let completedItems = JSON.parse(localStorage.getItem(COMP_STORAGE_KEY)) || []
  const [task, setTask] = useState(todoItems)
  const [completed, setCompleted] = useState(completedItems)
  const saveTaskHandler = (newTask) => {
    setTask((prevState) => [newTask, ...prevState])
  }
  let removedItem
  const removeTaskHandler = (id) => {
    setTask((prevState) => {
      const index = prevState.findIndex(item => item.id == id)
      removedItem = prevState[index]
      return prevState.filter(item => item.id!=id)
    })
    setCompleted((prevState) => [removedItem, ...prevState])
  }
  const changeStatusHandler = (id) => {
    setCompleted((prevState) => {
      const index = prevState.findIndex(item => item.id == id)
      setTask((prev) => [prevState[index], ...prev])
      return prevState.filter(item => item.id!=id)
    })
  }
  const deleteHandler = (id) => {
    setTask(prevState => {
      return prevState.filter(item => item.id != id)
    })
  }

  useEffect(() => {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(task))
  }, [task])

  useEffect(() => {
    localStorage.setItem(COMP_STORAGE_KEY, JSON.stringify(completed))
  }, [completed])

  return (
    <div className='container' >
      <TodoInput onAddTask={saveTaskHandler} />
      <TodoList todoItems={task} onTaskComplete={removeTaskHandler}  onDeleteTask={deleteHandler} />
      <CompletedList completedItems={completed} onChangeCompleted={changeStatusHandler}/>
    </div>
  );
}

export default App;
