import AppName from "./components/AppName";
import TodoAdd from "./components/TodoAdd";
import TodoItems from "./components/TodoItems";
import './App.css'

function App() {

  const todoItems = [
    {
      name: 'Buy Milk',
      dueDate: '4/10/2023'
    },
    {
      name: 'Go to Collage',
      dueDate: '4/10/2023'
    },
    {
      name: 'Go to school',
      dueDate: '4/10/2023'
    }
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <TodoAdd></TodoAdd>
      <TodoItems todoItems={todoItems}></TodoItems>
      
    </center>
  );
}

export default App
