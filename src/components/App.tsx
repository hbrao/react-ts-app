import React, { useState } from 'react';
import './App.css';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
import { ToDo } from './model/todo.model';

const App: React.FC = () => {

  const [todos, setToDos] = useState<ToDo[]>([{id:"01", text:"Default Task"}]);

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
