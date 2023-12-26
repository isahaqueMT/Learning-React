import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem key={todoItems} itemName={item.name} itemDate={item.dueDate}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
