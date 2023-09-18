import React,{useEffect, useState} from 'react'
import Todo from './todo'
import AddTodoFrom from './addTodoFrom'
import {v4 as uuidv4} from 'uuid'
uuidv4();

const TodoWrap = () => {
  const [todos,setTodos]=useState(()=>{
    const localValue=localStorage.getItem('ITEMS')
    if (localValue==null) return []

    return JSON.parse(localValue) 
  })
 useEffect(()=>{
  localStorage.setItem("ITEMS",JSON.stringify(todos))
 },[todos])

  const addTodo=(todo)=>{
 setTodos([...todos,{id: uuidv4(),task:todo,completed:false}])
  }
 const toggleComplete=id=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))

 }
 const deleteTask=(index)=>{
  const newTask=[...todos]
  newTask.splice(index,1)
  setTodos(newTask)
 }
  return (
    <div className='TodoWrapper'>
      <h1>GET THINGS DONE!</h1>
      <AddTodoFrom addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index}
       toggleComplete={toggleComplete}
      deleteTask={deleteTask} index={index}/>
      ))}
      
    </div>
  );
};

export default TodoWrap