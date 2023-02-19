import { useState } from 'react';
import TodoInput from './components/AddTodo/TodoInput'
import './App.css';
import TodoList from './components/ListTodo/TodoList';
import CompletedList from './components/ListCompleted/CompletedList';

function App() {
  const todoItems = [
    {
      id: '1',
      description: 'Dummy todo 1',
      dateCreated: new Date(2020, 10, 1)
    },
    {
      id: '2',
      description: 'Dummy todo 2',
      dateCreated: new Date(2020, 10, 2)
    },
    {
      id: '3',
      description: 'Dummy todo 3',
      dateCreated: new Date(2023, 2, 10)
    },
    {
      id: '4',
      description: 'Dummy todo 4',
      dateCreated: new Date(2020, 2, 16)
    },
  ]
  const completedItems = [
    {
      id: '5',
      description: 'Dummy todo 5',
      dateCreated: new Date(2020, 2, 16)
    }
  ]
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

  return (
    <div className='container' >
      <TodoInput onAddTask={saveTaskHandler} />
      <TodoList todoItems={task} onTaskComplete={removeTaskHandler}  onDeleteTask={deleteHandler} />
      <CompletedList completedItems={completed} onChangeCompleted={changeStatusHandler}/>
    </div>
  );
}

export default App;
