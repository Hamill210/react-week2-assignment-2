import React, { useState } from 'react';

import TodoPage from './TodoPage';

export default function App() {
  const [state, setState] = useState({
    newTodo: '',
    todos: [
    ],
  });

  const { newTodo, todos } = state;

  const handleTodosAdd = () => {
    const trimmedTodo = newTodo.trim();

    if (!trimmedTodo) {
      return;
    }

    setState({
      newTodo: '',
      todos: [...todos, {
        id: new Date().toISOString(),
        title: trimmedTodo,
      }],
    });
  };

  const handleTodosDelete = (id) => {
    setState({
      ...state,
      todos: todos.filter(({ id: todoId }) => todoId !== id),
    });
  };

  const handleNewTodoChange = (source) => {
    setState({
      ...state,
      newTodo: source,
    });
  };

  return (
    <TodoPage
      todos={todos}
      onTodosAdd={handleTodosAdd}
      onTodosDelete={handleTodosDelete}
      newTodo={newTodo}
      onNewTodoChange={handleNewTodoChange}
    />
  );
}
