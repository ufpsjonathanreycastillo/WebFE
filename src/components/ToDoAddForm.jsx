import React from 'react'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query';

const ToDoAddForm = () => {

  const mutation = useMutation({
    mutationFn: (formData) => {
      return axios
      .post('https://todo-api-50lq.onrender.com/api/tasks/', formData, {
        headers: {
          "Content-Type": "application/json",
          //"Authorization" : "Token 787d5b3b927339a0af966beae4317ef6b3a4a97e"
        },
      })
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate({ name: event.target.todo.value, description: ""})
    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
        />
      </label>
      <button>
        <span className="visually-hidden">Submit</span>
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          fill="#ffffff"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
        >
          <path
            d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
            fillRule="nonzero"
          />
        </svg>
      </button>
    </form>
  )
}

export default ToDoAddForm