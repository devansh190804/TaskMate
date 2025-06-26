import { useEffect, useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import TaskShow from './TaskShow'
import './index.css'



function App() {
 const[taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) || [])
 const[task, setTask] = useState({})

 useEffect(()=>{
  localStorage.setItem("tasklist", JSON.stringify(taskList))
 },[taskList])

  return (
    <div>
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
      <TaskShow taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
    </div>
  )
}

export default App
