import { Text, Form, TodoList, EditForm } from 'components';
import { set } from 'date-fns';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const getItemFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('todo')) ?? [];
  };

  const [todos, setTodos] = useState(getItemFromLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addTodo = text => {
    setTodos([...todos, { text, id: nanoid() }]);
  };

  useEffect(() => {
    const data = JSON.stringify(todos);
    localStorage.setItem('todo', data);
  }, [todos]);

  const removeTodoHendler = idDelete => {
    setTodos(todos.filter(item => item.id !== idDelete));
  };

  const EditTodoHandler = todoData => {
    setIsEditing(true);
    setCurrentTodo(todoData);
  };

  const updateTodoHandler = todoData => {
    setTodos(
      todos.map(item =>
        item.id === todoData.id ? { ...item, text: todoData.text } : item,
      ),
    );
  };

  const cancelUpdateHandler = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo}
          updateTodo={updateTodoHandler}
          cancelUpdate={cancelUpdateHandler}
        />
      ) : (
        <Form onSubmit={addTodo} />
      )}
      <TodoList
        todos={todos}
        removeTodo={removeTodoHendler}
        editTodo={EditTodoHandler}
        currentTodo={currentTodo}
      />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
