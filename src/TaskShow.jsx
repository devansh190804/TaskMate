import React from 'react'

const TaskShow = ({taskList,setTaskList, task, setTask}) => {

    const handleDelete = (id)=>{
      //  const updatedTaskList = taskList.filter(todo => todo.id !== id)
        setTaskList(taskList.filter(todo => todo.id !== id))
    }

    const handleEdit = (id)=>{
      const selectedTask = taskList.find(todo => todo.id === id);
      setTask(selectedTask)
    }


  return (
    <section className='TaskShow'>
       <div className="head">
              <div>
                 <span className='title'>Todo</span>
                 <span className='count'>0</span>
              </div>
                 <button className='clearAll' onClick={()=>setTaskList([])}>Clear All</button>      
       </div>

          <ul>
            {taskList.map((todo) => (
              <li key={todo.id}>
                <p>
                    <span className='name'>{todo.name}</span>
                    <span className='time'>{todo.time}</span>
                </p>
                <i onClick={()=> handleEdit(todo.id)} className='bi bi-pencil-square'></i>
                <i onClick={()=> handleDelete(todo.id)} className='bi bi-trash' ></i>
            </li>
            ))}
          </ul>
    </section>
  )
}

export default TaskShow
