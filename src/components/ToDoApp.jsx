import React, { useState, useEffect} from 'react'
import ToDoList from './ToDoList';
import ToDoHeader from './ToDoHeader';
import ToDoAddForm from './ToDoAddForm';
import {
  useQuery,
} from '@tanstack/react-query';
import axios from 'axios'

const ToDoApp = () => {

  const [todos, setTodos] = useState([]);

  const {data, status } = useQuery({
    queryKey: ['dataTasks'],
    queryFn: () =>
      axios
        .get('https://todo-api-50lq.onrender.com/api/tasks/',{
          headers: {
            "Content-Type": "application/json",
            //"Authorization" : "Token 787d5b3b927339a0af966beae4317ef6b3a4a97e"
          },
        })
  })

  useEffect(() => {
    const storedTodos = data?.data?.results;
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, [data]);

  const todos_completed = todos.filter((todo) => todo.completed == true )?.length;
  const total_todos = todos.length;

  return (
    <div className="wrapper">
      <ToDoHeader todos_completed={todos_completed} total_todos={total_todos} />
      <ToDoAddForm todos={todos} setTodos={setTodos} />
      <ToDoList status={status} todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default ToDoApp