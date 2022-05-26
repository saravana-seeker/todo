import React, { useEffect, useState } from 'react'
import CreateTask from '../CreateTask/CreateTask'
import TaskCard from '../TaskCard/TaskCard'
import "./Todo.css"

function TodoList() {
  const [modal,setModal] = useState(false)
  const toggle = () => {setModal(!modal)}
  const [taskList,setTaskList] = useState([])
  
  useEffect(()=>{
    let arr = localStorage.getItem("taskList")
    if(arr){
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
  },[])

  const DeleteTask =(index) => {
    let tempList = taskList
    tempList.splice(index,1)
    localStorage.setItem('taskList',JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  const saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    setTaskList(tempList)
    localStorage.setItem("taskList",JSON.stringify(taskList))
    setModal(false)
    //console.log(tempList)
  }

  const updateListArray = (obj,index) => {
    let tempList = taskList
    tempList[index] = obj
    localStorage.setItem('taskList',JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }
  return (
    <>
    <div className='header text-center'>
        <h3 className='pt-4'>To Do</h3>
        <button className='btn btn-primary' onClick={()=> {setModal(true)}}> Create Task</button>
    </div>
    
    <div className="container">
    <div className="row d-flex justify-content-center">
    
    {taskList.map((obj,index) => <TaskCard taskObj={obj} index={index} DeleteTask={DeleteTask} updateListArray={updateListArray} /> )}
  

  </div>
    </div>
    
    <CreateTask toggle={toggle} modal={modal}  save={saveTask}/>
    </>

  )
}

export default TodoList