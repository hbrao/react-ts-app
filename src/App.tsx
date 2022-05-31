import React, { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { ToDo } from './todo.model';

const App: React.FC = () => {

  const [todos, setToDos] = useState<ToDo[]>([]);

  const todoAddHandler = (enteredText: string) => {
    console.log(`Value at callback : ${enteredText}`);
    setToDos(prevToDos => [...prevToDos, {id: Math.random().toString(), text: enteredText}]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setToDos(prevToDos => {
      return prevToDos.filter(todo => todo.id !== todoId)
    });
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
