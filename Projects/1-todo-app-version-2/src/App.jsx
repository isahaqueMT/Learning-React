import AppName from "./components/AppName";
import TodoAdd from "./components/TodoAdd";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <TodoAdd></TodoAdd>
      <TodoItem itemName="Buy Milk" itemDate="4/10/2023"></TodoItem>
      <TodoItem itemName="Go to Collage" itemDate="4/10/2023"></TodoItem>
    </center>
  );
}

export default App;
