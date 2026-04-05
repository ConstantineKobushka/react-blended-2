import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';

import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';
import EditForm from '../components/EditForm/EditForm';

const Todos = () => {
  const loadFromStorage = (key, fallback) => {
    try {
      const data = localStorage.getItem(key);
      if (!data) return fallback;

      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : fallback;
    } catch {
      return fallback;
    }
  };

  const [todos, setTodos] = useState(() => loadFromStorage('todos', []));
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const validateTodo = (text, id = null) => {
    if (!text) {
      alert('The field cannot be empty');
      return false;
    }

    const exists = todos.some(todo => todo.text === text && todo.id !== id);

    if (exists) {
      alert('This task already exists');
      return false;
    }

    return true;
  };

  const addTodo = text => {
    if (!validateTodo(text)) return;
    setTodos(prevTodos => [...prevTodos, { id: nanoid(), text }]);
  };

  const deletTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const editTodo = curentTodo => {
    setIsEditing(true);
    setCurrentTodo(curentTodo);
  };

  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  const updateTodo = (id, text) => {
    if (!validateTodo(text, id)) return;

    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === id ? { ...todo, text } : todo))
    );

    cancelUpdate();
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo}
          cancelUpdate={cancelUpdate}
          updateTodo={updateTodo}
        />
      ) : (
        <Form onSubmit={addTodo} />
      )}

      <TodoList todos={todos} deletTodo={deletTodo} editTodo={editTodo} />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

export default Todos;
